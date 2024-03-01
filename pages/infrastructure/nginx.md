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
