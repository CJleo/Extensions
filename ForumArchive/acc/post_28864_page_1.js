[{"Owner":"ian","Date":"2017-03-06T17:19:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIs it possible to make mash collision physics calculation only around some radius around mesh?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor example If we have ball with radius 1 unit and some big mesh with 1 milion vertices.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would like that mesh collision will calculate only collision around radius 5 unit around current ball position. Object with mesh-collision will be rotate at run-time (So if we don_t_t have static-collider object_with_mesh_impostor/collider) \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tIs possible to add this functions? Can be this funcions accelerate collision calculation?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGreetings_lt_br /_gt_\n\tIan\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-03-06T17:35:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17776-ian/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17776_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17776-ian/_qt_ rel_eq__qt__qt__gt_@ian_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAre you mentioning camera collision or physics simulation?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor physics simulation it is easy as all meshes use impostors_dd_ So in this case_co_ just set some box/sphere impostors and there is no problem \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor camera collision_dd_ Camera impostor is an ellipsoid and it is evaluated against bounding sphere_co_ so what you are mentioning is already in place _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ian","Date":"2017-03-06T20:26:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSimulation. For example I have some mesh and if I use mesh impostor with sphere I have problem if mesh have a lot vertices. Problem is that ball fall over somewhere.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSecond example I put 470 box impostors around mesh and use sphere with 470 box impostors. This simulation works reliable/better (ball does not fall over box impostors) But here is physics performance problem (works slower but reliable).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis simulation works so that mesh and box colliders are always rotating!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tExample ball radius 1 and radius 5\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would like to know if it will be possible to add mesh impostor on mesh and add some radius around current ball position. So that only mesh_t_s vertices/faces which are inside radius should be calculate physics collision between ball and vertices/faces of mesh around radius\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hope you understand.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGreetings\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIan\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ian","Date":"2017-03-06T20:33:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tMaybe I am asking stupid question?_lt_br /_gt__lt_br /_gt_\n\tI don_t_t know exactly how mesh collision works sphere again mesh?_lt_br /_gt_\n\tThere is probably sphere_t_s radius. And mesh_t_s faces/vertices??? Which mesh_t_s faces/vertices are needed  for calculation physics collision between sphere(SphereImpostor) and mesh(MeshImpostor) ???\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-03-06T22:47:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo you are talking about physics.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhich engine are you using? Oimo or Cannon?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ian","Date":"2017-03-07T10:47:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tCannon \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-03-07T17:24:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk. regarding your question you can still think about using mesh intersections and turn on impostors only when there is a mesh intersection (which is done at bounding box level)_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor isntance use actions with BABYLON.ActionManager.OnIntersectionEnterTrigger to add impostor and use BABYLON.ActionManager.OnIntersectionExitTrigger to remove it\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ian","Date":"2017-03-08T13:42:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\taha - thank you for your suggestion\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ian","Date":"2017-03-23T17:39:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_br /_gt__lt_br /_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt__lt_/span_gt__lt_br /_gt_\n\tI prepared two playground (simple and complex(with WSAD rotation)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tDeltakosh as you suggest. I put first on loading all Cube... meshes/boxes in colliders array. Than I sey for each colliders as parent of perplexus mesh._lt_br /_gt_\n\tThan I add on each box-mesh-collider (from colliders array) OnIntersectionEnterTrigger and OnIntersectionExitTrigger._lt_br /_gt_\n\tHere I add physicsImpostor.BoxImpostor on each box IF playball and specific box OnIntersectionEnterTrigger happend._lt_br /_gt_\n\tAnd I remove physicsImpostor.BoxImpostor from specific box in colliders object if OnIntersectionExitTrigger happend._lt_br /_gt_\n\t(F12 console shows ok ..)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_BUT playball mesh/sphere fall through. Am I missing anything? Or Am I doing anything incorrect? Any help?_lt_/strong_gt__lt_br /_gt__lt_br /_gt_\n\tI add also console.log you can see that playBall mesh/sphere fall over\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tsimple example_lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1U2VMI%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1U2VMI#0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_...\nif ( newMesheI.id.substring(0_co_ 4) _eq__eq_ _qt_Cube_qt_) {\t\t\t\t\n\t\t\t\tcolliders.push( newMesheI )_sm_\n\t\t\t\t\n}\n....\n....\n\nfor (var a_eq_0_sm_ a&lt_sm_colliders.length_sm_ a++) {            \n            colliders[a].parent _eq_ perplexus_sm_\n            colliders[a].rotationQuaternion _eq_ new BABYLON.Quaternion()_sm_\n            colliders[a].isVisible _eq_ true_sm_\n} // end for set up all colliders\n\t\t\nfor (var a_eq_0_sm_ a&lt_sm_colliders.length_sm_ a++) {            \n            colliders[a].actionManager _eq_ new BABYLON.ActionManager(scene)_sm_\n            colliders[a].actionManager.registerAction(\n                new BABYLON.ExecuteCodeAction(\n                    { trigger_dd_ BABYLON.ActionManager.OnIntersectionEnterTrigger_co_ parameter_dd_ { mesh_dd_playBall_co_ usePreciseIntersection_dd_ true}  }_co_\n                    function(evt) {\n                        console.log(_qt_onIntersectioneEnterTrigger BEGIN_qt_)_sm_\n                        console.log(_qt_Object ID - intersection _eq_ _qt_+evt.source.id)_sm_\n                        console.log(_qt_Object ID - begin physicsImpostor _eq_ _qt_+evt.source.physicsImpostor)_sm_\n                        evt.source.checkCollisions _eq_ true_sm_\n                        if ( evt.source.physicsImpostor _eq__eq_ undefined ) {\n                            evt.source.physicsImpostor _eq_ new BABYLON.PhysicsImpostor( evt.source_co_ BABYLON.PhysicsImpostor.BoxImpostor_co_ { mass _dd_ 0_co_ friction _dd_ 1_co_ restitution _dd_ 0 }_co_ scene)_sm_\n                            console.log(_qt_Object ID - end physicsImpostor _eq_ _qt_+evt.source.physicsImpostor)_sm_\n                            console.log(_qt_onIntersectioneEnterTrigger END_qt_)_sm_\n                        }\n                    })\n            )_sm_\n\n            colliders[a].actionManager.registerAction(\n                new BABYLON.ExecuteCodeAction(\n                    { trigger_dd_ BABYLON.ActionManager.OnIntersectionExitTrigger_co_ parameter_dd_ { mesh_dd_playBall_co_ usePreciseIntersection_dd_ true}  }_co_\n                    function(evt) {\t     \n                        console.log(_qt_onIntersectionExitTriger BEGIN_qt_)_sm_\n                        console.log(_qt_Object ID - intersection _eq_ _qt_+evt.source.id)_sm_\n                        console.log(_qt_Object ID - begin physicsImpostor _eq_ _qt_+evt.source.physicsImpostor)_sm_\n                        evt.source.checkCollisions _eq_ false_sm_\n                        if ( evt.source.physicsImpostor !_eq_ undefined ) {\n                            evt.source.physicsImpostor _eq_ undefined_sm_\n                        }\n                    })\n            )_sm_                    \n        } // end set up enter end exit triggers/listeners on all Cube boxes (adding impostor and removeing impostors)\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tcomplex example (this playground has more code camera is focusing on ball and you can rotate model with WSAD but ball fall over....)_lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#VZM8J%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#VZM8J#0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tGreetings_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIan\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-03-27T21:12:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbetter?_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1U2VMI%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1U2VMI#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ian","Date":"2017-03-30T06:32:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre_gt_\n_lt_code_gt_if ( newMesheI.id.substring(0_co_ 4) _eq__eq_ _qt_Cube_qt_) {\t\t\t\t\n    colliders.push( newMesheI )_sm_\n    newMesheI.physicsImpostor _eq_ new BABYLON.PhysicsImpostor( newMesheI_co_ BABYLON.PhysicsImpostor.BoxImpostor_co_ { mass _dd_ 0_co_ friction _dd_ 1_co_ restitution _dd_ 0 }_co_ scene)_sm_\t\t\t\t\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAs I can see you add physicsImpostor at the beginning. (If you do same on my complex example. you will see that BoxImpostor(physics) are static and are not moving._lt_br /_gt__lt_br /_gt__lt_strong_gt_No I would like that BoxImpostors are moving. I don_t_t want static BoxImpostors._lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t1.alternative_lt_br /_gt_\n\tOr I want to activate only those BoxImpostors which are enter-intersection with playBall and deactivate those BoxImpostors exit-which are intersection._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t2.alternative_lt_br /_gt_\n\tOr If we imagine PlayBall with radius 1. and Virtual_PlayBall-&gt_sm_(as child of PlayBall) with radius 5.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf we calculate _lt_strong_gt_intersection-faces of Perplexus_lt_/strong_gt_ with Virtual_PlayBall at each frame/physics_steep. I would like that physics-collision will work/calculate only between _lt_strong_gt_PlayBall_lt_/strong_gt_ and _lt_strong_gt_intersection-faces of Perplexus_lt_/strong_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t....................\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe I am asking stupid question. What I would like to achieve is that collision between perplexus and playball will calculate only around some virtual-sphere(this virtual-sphere is child of playBall) area ( or specific example around radius 5 around virtual-sphere)._lt_br /_gt_\n\tI want that perplexus can have _qt_unlimited/lot of_qt_ number of vetices. If I understand correct if we have for example to big perplexus model the mesh collision is not reliable any more._lt_br /_gt__lt_br /_gt_\n\tIs possible to custom MeshImpostor/Mesh_collision. To add some parameter(virtual_sphere_area) and that collision between ball and mesh will calculate only intersection faces of mesh and virtual_sphere_area and playball. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ian","Date":"2017-04-02T08:55:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tRannan is possible to enable/disable box physics colliders at runtime(render or physics time)?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs possible to rotate phsycs box colliders/impostors and enable only those which happen enter-intersection between ball/sphere and boxes(which are intended for box impostors/colliders).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tor\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf we initialize all cubes as box impostors and if cubes are child of perplexus. Does box impostors rotate/move if we rotate perplexus or are those box impostors static?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs possible to achieve anything like that???\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRannan what is your opinion to achieve that and what do you think about performance impact?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ian","Date":"2017-04-03T13:34:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\twe are trying to do some example with parent-child box colliders. I_t_ll report if this will work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tgreetings_lt_br /_gt_\n\tIan\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-04-03T16:29:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI_t_ll see with raanan to see if he has time _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-04-04T22:30:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_span_gt__lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17776-ian/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17776_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17776-ian/_qt_ rel_eq__qt__qt__gt_@ian_lt_/a_gt__co__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt_there is the option to make a collider _qt_sleep_qt_ and _qt_wakeUp_qt_ (both functions are implemented on the physics collider)_co_ which stops the physics engine from applying forces on the box. Is this what you are looking for?_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ian","Date":"2017-04-05T12:24:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tRannanW_co_ I and my friend solve this problem._lt_br /_gt_\n\tNow colliders(box-impostors) are as child of model. Model and colliders are rotating as expected! _lt_br /_gt_\n\tSo physics works as charm (perfect). I have 470 box colliders and everythink work fine (reliable working physics collision)_dd_ And performance are fine too._lt_br /_gt_\n\tSoon I_t_ll show when I finsih upgrade of game (almost finish I am trying also to make custom camera aligment... - alternative)._lt_br /_gt__lt_br /_gt_\n\tRannaW thank you for your post (Il save it) Maybe someday I_t_ll try something like that sleep and wakUp.._lt_br /_gt__lt_br /_gt_\n\tgreetings_lt_br /_gt_\n\tIan_lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ian","Date":"2017-04-07T08:29:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_169773_qt_ data-ipsquote-contentid_eq__qt_28864_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1491345055_qt_ data-ipsquote-userid_eq__qt_10310_qt_ data-ipsquote-username_eq__qt_RaananW_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 4/5/2017 at 0_dd_30 AM_co_ RaananW said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHi _lt_span_gt__lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17776-ian/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17776_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17776-ian/_qt_ rel_eq__qt__qt__gt_@ian_lt_/a_gt__co__lt_/span_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt__lt_span_gt_there is the option to make a collider _qt_sleep_qt_ and _qt_wakeUp_qt_ (both functions are implemented on the physics collider)_co_ which stops the physics engine from applying forces on the box. Is this what you are looking for?_lt_/span_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt__lt_br /_gt_\n\tRaananW is there any playground showcase for learning to see how works sleep and wakeUp ?_lt_br /_gt__lt_br /_gt_\n\tGreetings_lt_br /_gt_\n\tIan\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-04-11T14:54:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tthere should be one_co_ right? _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ I will try making one this evening_co_ after fixing the extend size bug\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]