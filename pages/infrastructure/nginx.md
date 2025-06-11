# Nginx

[Restricting Access with HTTP Basic Authentication](https://docs.nginx.com/nginx/admin-guide/security-controls/configuring-http-basic-authentication/)

```bash
sudo systemctl start nginx
sudo systemctl stop nginx
sudo systemctl restart nginx

sudo systemctl status nginx

# reload after config changes
sudo systemctl reload nginx
```

If the nginx server failed to start or stop or restart, check for the syntax error:

```bash
nginx -t
## OR set path to config file and test for the errors ##
nginx -c /etc/nginx/nginx.conf -t
```

## Traffic Metrics

To measure traffic in Nginx, you can use the built-in **"stub_status" module to access basic traffic metrics** like active connections, requests received, and bytes transferred by accessing a specific URL on your server, typically through a dedicated "nginx_status" location in your Nginx configuration; **for more detailed traffic analysis, consider using Nginx Controller** which provides a comprehensive set of metrics via its REST API and allows you to monitor traffic across various dimensions and timeframes.

Using the "stub_status" module:

* Enable the "stub_status" module in your Nginx configuration.
* Create a specific location in your server block to access the status page (e.g., /nginx_status).
* Access this URL using a tool like curl to view basic traffic metrics.

Monitoring with Nginx Controller:

* Install and configure Nginx Controller.
* Utilize the Nginx Controller API to retrieve detailed traffic metrics like requests per second, bytes received/sent, response times, and more.
* Filter metrics based on specific criteria like server name, location, or HTTP status code.

Metrics to consider:

* **Active connections**: The number of currently open connections to the Nginx server.
* **Requests received**: Total number of HTTP requests received by Nginx.
* **Bytes received/sent**: Amount of data transferred between the client and server.
* **Request rate**: Number of requests per second
* **Average response time**: Average time taken to process a request

### sub_status module

```nginx
location /nginx_status {
  stub_status on;
  allow 127.0.0.1;
  deny all;
  auth_basic off;
}
```
