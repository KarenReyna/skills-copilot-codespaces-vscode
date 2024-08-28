function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'skillsMvmemberCtrl',
        bindToController: true,
        scope: {
            member: '='
        }
    }
}