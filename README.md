openshift-angularjs-nodejs-mongodb-quickstart
=============================================
AngularJS, NodeJs, MongoDB sample

- src (Joe Lennon) http://www.ibm.com/developerworks/web/library/wa-nodejs-polling-app/index.html?ca=drs-

- demo http://mynodejs-bvan.rhcloud.com/

pre-requisites :
- check ".openshift/lib/.npmrc" for your proxy configuration (fix for "SSL Error: CERT_UNTRUSTED" error)

# how to deploy (quick) 

<pre>
rhc create-app mynodejs nodejs-0.6 mongodb-2.2 --from-code=https://github.com/boly38/openshift-angularjs-nodejs-mongodb-quickstart.git
</pre>

details :
 - create an application with nodejs 0.6 and mongodb cartridges. 
 - action hooks will setup nodejs 0.10.10 and set node/npm path and proxies

# how to deploy (custom config)
The way to update your npm configuration : set your own proxies
(assume openshift application name is "ttt")
<pre>
git clone https://github.com/boly38/openshift-angularjs-nodejs-mongodb-quickstart.git
cd openshift-angularjs-nodejs-mongodb-quickstart/

# update this file with your own config
cat .openshift/lib/.npmrc

rhc create-app ttt nodejs-0.6 mongodb-2.2 --no-git
rhc show-app ttt
git remote add ttt ssh_git_url (the ssh git url given by rhc show-app ttt)
git push ttt master --force
</pre>


# faq

## error on deploy (quick) 
please try (custom config) way : sometimes openshift create-app failed on timeout if nojdes and/or npm dep install is too long.

## i am behind a proxy

set "http_proxy" and "https_proxy" before using <code>rhc</code> command, and you could update your <code>%HOME%/.ssh/config</code> (example using cygwin nc)
<pre>
Host *.rhcloud.com
	Port 22 
	ProxyCommand /c/cygwin/bin/nc.exe -x myproxy:1080 %h %p
</pre>
