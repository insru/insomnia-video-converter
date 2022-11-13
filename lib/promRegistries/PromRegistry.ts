import {Counter, Gauge, register, Registry} from 'prom-client';
import {IMetrics} from '~/lib/types/interfaces/IMetrics';
import {IMetric} from '~/lib/types/interfaces/IMetric';

export class PromRegistry {
    private readonly gauges: { [key: string]: Gauge };
    private readonly counters: { [key: string]: Counter };
    private readonly registry: Registry;
    private readonly contentType: string;
    private readonly serviceName: string;

    constructor(serviceName: string) {
        this.contentType = register.contentType;
        this.serviceName = serviceName;
        this.gauges = {};
        this.counters = {};
        this.registry = new Registry;
    }

    public getContentType(): string {
        return this.contentType;
    }

    public postGauge(metric: IMetric) {
        // существует ли метрика?
        if (this.gauges[metric.name]) {
            // сэт
            this.gauges[metric.name].set(metric.labels, metric.value);
        } else {
            const labelNames = Object.keys(metric.labels);
            // создание метрики
            this.gauges[metric.name] = new Gauge({
                name: metric.name,
                help: metric.help,
                labelNames: labelNames,
                registers: [this.registry]
            });
            this.gauges[metric.name].set(metric.labels, metric.value);
        }
    }

    public postCounter(metric: IMetric) {
        // существует ли метрика?
        if (this.counters[metric.name]) {
            // сэт
            this.counters[metric.name].inc(metric.labels, metric.value);
        } else {
            const labelNames = Object.keys(metric.labels);
            // создание метрики
            this.counters[metric.name] = new Counter({
                name: metric.name,
                help: metric.help,
                labelNames: labelNames,
                registers: [this.registry]
            });
            this.counters[metric.name].inc(metric.labels, metric.value);
        }
    }

    public getMetrics(): Promise<string> {
        return this.registry.metrics();
    }

    public getPromMetrics(metrics: IMetrics, environment: string): Promise<string> {
        metrics.forEach(metric => {
            metric.labels = {
                ...metric.labels,
                env: environment,
                service: this.serviceName
            };

            if (metric.type === 'counter') {
                this.postCounter(metric);
            } else {
                this.postGauge(metric);
            }
        });
        return this.getMetrics();
    }
}
