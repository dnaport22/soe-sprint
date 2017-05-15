soe.controller('feedbackctrl', function($scope, $ionicTabsDelegate, UserFactory, UIfactory, FeedbackFormNotification) {
	$scope.$on("$ionicView.beforeEnter", function () {
		$ionicTabsDelegate.showBar(true);
	});

	$scope.submit = () => {

		var feedback = {
			subject: inputVal.getValue('feed_subject'),
			message: inputVal.getValue('feed_message'),
			date: new Date()
		}
		
		var validate = checkObjectForEmptyValues(feedback);
		validate === true ? console.log('use function to send feedback') : UIfactory.showAlert('Alert', FeedbackFormNotification.MISSING_FIELD);
	}

	checkObjectForEmptyValues = (object) => {
		for (feedbackValue in object) {
			if(!object[feedbackValue]){
				return false;
			}
		}
		return true;
	}

});