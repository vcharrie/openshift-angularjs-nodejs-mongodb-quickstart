openshift-angularjs-nodejs-mongodb-quickstart
=============================================
#
# AngularJS, NodeJs, MongoDB sample
#
# src (Joe Lennon) http://www.ibm.com/developerworks/web/library/wa-nodejs-polling-app/index.html?ca=drs-
#

####################
# how to deploy me 
####################
# pre-requisites : 
# - check ".openshift/lib/.npmrc" for your proxy configuration (fix for "SSL Error: CERT_UNTRUSTED" error)
#
# then the following command will :
# - create an application with nodejs 0.6 and mongodb cartridges. 
# - action hooks will setup nodejs 0.10.10 and set node/npm path and proxies
#
rhc create-app mynodejs nodejs-0.6 mongodb-2.2 --from-code=https://github.com/boly38/openshift-angularjs-nodejs-mongodb-quickstart.git
