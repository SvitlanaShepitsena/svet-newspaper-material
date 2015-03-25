
/*******************************
     svv animation
********************************/

.svv.ng-hide-add,
.svv.ng-leave
  position relative
  animation 1s svv_animation_go

.svv.ng-hide-remove,
.svv.ng-enter
  position relative
  animation 1s svv_animation_come

@keyframes svv_animation_go
 0%
  opacity 1
  top 0px
 100%
  opacity 0
  top 200px

@keyframes svv_animation_come
 0%
  opacity 0
  top 200px
 100%
  opacity 1
  top 0px

//*******************************
