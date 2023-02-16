# OpenSSL

## Check a PKCS#12 file (.pfx or .p12)

```bash
openssl pkcs12 -info -in keyStore.pfx

# Enter the following openssl command to present the certificate information in a readable format
openssl pkcs12 -info -in [certname.pfx] | openssl.exe x509 -noout -text

# Enter the following openssl command to present the SAN information from the certificate in a readable format
penssl.exe pkcs12 -info -in [certname.pfx] | openssl.exe x509 -noout -ext subjectAltName
```

## Convert pfx file to pem file

```bash
# To convert a PFX file to a PEM file that contains both the certificate and private key, the following command needs to be used:
openssl pkcs12 -in filename.pfx -out cert.pem -nodes

# key + cert to PFX
openssl.exe pkcs12 -export -out www.doremi.evs.slb.com.pfx -inkey www.doremi.evs.slb.com.key -in www.doremi.evs.slb.com.cer

# We can extract the private key form a PFX to a PEM file with this command:
openssl pkcs12 -in filename.pfx -nocerts -out key.pem

# Exporting the certificate only:
openssl pkcs12 -in filename.pfx -clcerts -nokeys -out cert.pem -name "FriendlyName"

# Removing the password from the extracted private key:
openssl rsa -in key.pem -out server.key
```

## Generate cert for localhost

https://www.section.io/engineering-education/how-to-get-ssl-https-for-localhost/
```
openssl genrsa -out localhost-ca.key -des3 2048
openssl req -x509 -sha256 -new -nodes -days 3650 -key localhost-ca.key -out localhost-ca.pem
```

## More

```bash
# .cer certificate to .pem?
openssl x509 -inform der -in certificate.cer -out certificate.pem
```

## Links

* [The Most Common OpenSSL Commands](https://www.sslshopper.com/article-most-common-openssl-commands.html)