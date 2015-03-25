
/*******************************
     svv animation
********************************/

.svv.ng-enter,
.svv.ng-hide-add,
.svv.ng-hide-remove,
.svv.ng-leave
  position relative
  transition(1s)

.svv.ng-enter,
.svv.ng-hide-remove,
.svv.ng-hide-add.ng-hide-add-active,
.svv.ng-leave.ng-leave-active
  opacity 0
  left 200px

.svv.ng-enter.ng-enter-active,
.svv.ng-hide-add,
.svv.ng-hide-remove.ng-hide-remove-active,
.svv.ng-leave
  opacity 1
  left 0px

//*******************************
