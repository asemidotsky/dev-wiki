# Elasticsearch

[Install](http://www.elastic.co/guide/en/elasticsearch/reference/current/deb.html)

Elasticsearch can be started and stopped as follows:

```bash
sudo systemctl start elasticsearch.service
sudo systemctl stop elasticsearch.service
```

logs: `/var/log/elasticsearch/`

# Kibana

[Install](http://www.elastic.co/guide/en/kibana/current/deb.html)

Kibana can be started and stopped using the *service* command:

```bash
sudo systemctl start kibana.service
sudo systemctl stop kibana.service
```

Log files can be found in `/var/log/kibana/`

# Logstash

[Install](https://www.elastic.co/guide/en/logstash/current/installing-logstash.html)

```bash
sudo systemctl start logstash.service
sudo systemctl stop logstash.service
```

logs: `/var/log/logstash`

The auto-generated configuration file for upstart systems is `/etc/init/logstash.conf`

Logstash has two types of configuration files: *pipeline configuration files*, which define the Logstash processing pipeline, and *settings files*, which specify options that control Logstash startup and execution.

On deb and rpm, you place the pipeline configuration files in the `/etc/logstash/conf.d` directory. Logstash tries to load only files with `.conf` extension in the `/etc/logstash/conf.d` directory and ignores all other files.

Example of `logstash.conf` with receiving logs from RabbitMQ:

```bash
input {
  rabbitmq {
    subscription_retry_interval_seconds => 5
    host => "192.168.1.150"
    vhost => "logs"
    user => "logger"
    password => "PASSWORD"
    port => 5672
    durable => true
    exchange => "MyProduct.Logging.LogMessage"
    exclusive => false
    key => ""
    queue => "logstash"
    passive => false
    prefetch_count => 10
    ssl => false
    # tags => ... # array (optional)
    type => "ampq.logger"
    verify_ssl => false
  }
}
output {
  elasticsearch {
    hosts => ["localhost:9200"]
  }
}
```