# Ubuntu

## Certificates

Ubuntu keeps trusted CA certificates in:

```bash
/etc/ssl/certs/
/usr/share/ca-certificates/
/usr/local/share/ca-certificate/
```

* To list all trusted CA certs, run: `ls -l /etc/ssl/certs/*.pem`
* To inspect a particular certificate: `openssl x509 -in /etc/ssl/certs/<filename>.pem -noout -text`
* To view the entire trust store as one bundle: `sudo cat /etc/ssl/certs/ca-certificates.crt | less`
* To search for a specific CA inside it: `grep -R "DigiCert" -n /etc/ssl/certs/ca-certificates.crt`

```bash
#To verify endpoint certificate:

openssl s_client -connect HOST:443 -showcerts

# Check what OpenSSL thinks about the chain:
openssl s_client -connect HOST:443 -CAfile /etc/ssl/certs/ca-certificates.crt
```
