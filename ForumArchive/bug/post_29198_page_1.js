[{"Owner":"Ridge Batty","Date":"2017-03-20T11:29:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAfter wrestling countless hours with a problem (as you do) I came to the conclusion that ShaderMaterial is broken in 3.0. More accurately_co_ I can_t_t get texture lookups to work in _lt_u_gt_vertex shader._lt_/u_gt_ But they do work in Babylon 2.5\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAdd this line in any vertex shader and it wont compile_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_vec4 test _eq_ texture2D(textureSampler_co_ uv)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-03-20T17:13:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tdid you try without webgl2? (_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/babylon.engine.ts#L560_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/babylon.engine.ts#L560_lt_/a_gt_)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]