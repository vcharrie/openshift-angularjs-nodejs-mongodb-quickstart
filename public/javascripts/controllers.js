// Managing the list list
function TListListCtrl($scope, TListDB) {
	$scope.tlists = TListDB.query();
}
// Voting / viewing poll results
function TListItemCtrl($scope, $location, $routeParams, TListDB) {
  console.log("TListItemCtrl...");
  $scope.tlist = TListDB.get({tlistId: $routeParams.tlistId});
  $scope.addArtefact = function() {
	    $scope.tlist.artefacts.push({ text: '' });
  };  
  $scope.updateTList = function() {
	console.log("update tlist ...");
  	var tlist = $scope.tlist;
  	console.log("update tlist " + tlist.title);
  	var newTList = new TListDB(tlist);       
  	tlist.$delete({'tlistId':tlist._id});
  	newTList.$save(function(p, resp) {
  		if(!p.error) { 
  			$location.path('tlists');
  		} else {
  			alert('Could not update trip list');
  		}
  	});
  };  
}
// Creating a new poll
function TListNewCtrl($scope, $location, TListDB) {
  $scope.tlist = {
    title: '',
    artefacts: [{ text: 'chaussette' }, { text: 'pull' }]
  };
  $scope.addArtefact = function() {
    $scope.tlist.artefacts.push({ text: '' });
  };
  $scope.createTList = function() {
      var tlist = $scope.tlist;
	  console.log("create tlist " + tlist.title); 
      if(tlist.title.length > 0) {
        var artefactCount = 0;
        for(var i = 0, ln = tlist.artefacts.length; i < ln; i++) {
          var art = tlist.artefacts[i];        
          if(art.text.length > 0) {
        	  artefactCount++;
          }
        }    
        if(artefactCount > 1) {
          var newTList = new TListDB(tlist);       
          newTList.$save(function(p, resp) {
            if(!p.error) { 
              $location.path('tlists');
            } else {
              alert('Could not create trip list');
            }
          });
        } else {
          alert('You must enter at least two artefacts');
        }
      } else {
        alert('You must enter a title');
      }
    };
}