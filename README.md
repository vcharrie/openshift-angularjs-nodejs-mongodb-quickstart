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
# openshift nodejs 0.6 cartridge
# ------------------------------
# pre-requisites : check ".openshift/lib/.npmrc" for your proxy configuration
#
# - clone me locally 
# - got to the just cloned git directory and do the following commands 
# (assume openshift application name is "ttt")
#
rhc create-app ttt nodejs-0.6 --no-git
rhc cartridge add mongodb-2.2 -a ttt
rhc force-stop-app --app ttt
cat .openshift/lib/.npmrc | rhc ssh ttt "cat > $OPENSHIFT_HOMEDIR/.npmrc"
rhc show-app ttt
git remote add ttt ssh_git_url (the ssh git url given by rhc show-app ttt)
git push ttt master --force
