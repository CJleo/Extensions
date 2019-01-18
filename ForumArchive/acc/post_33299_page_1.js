[{"Owner":"MattJ","Date":"2017-10-07T20:07:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m new to Babylon.js_co_ and not a very experienced programmer. I_t_m trying to learn Babylon.js_co_ and I made a simple scene to run from firefox localhost. I_t_m using Xampp Apache_co_ and all the files (my project html_co_ babylon.js_co_ and image file) are in the XAmpp htdocs folder.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt seems I can_t_t use an texture image. Any mesh having this texture is completely missing in the rendered scene. Otherwise_co_ the babylon.js works just fine.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m clueless_co_ what am I missing. The folders and file locations are ok_co_ the image works just fine within another scripts\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is my code included_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t&lt_sm_hmtl&gt_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t&lt_sm_head&gt_sm__lt_br /_gt_\n\t&lt_sm_/head&gt_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t&lt_sm_body&gt_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t&lt_sm_Div id_eq__qt_Div1_qt_&gt_sm__lt_br /_gt_\n\t&lt_sm_canvas id_eq__qt_Main_qt_ width _eq_ _qt_1920px_qt_ height_eq__qt_1080px_qt_&gt_sm__lt_br /_gt_\n\t&lt_sm_/canvas&gt_sm__lt_br /_gt_\n\t&lt_sm_/Div&gt_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t&lt_sm_script src_eq__qt_babylon.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t&lt_sm_script&gt_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\twindow.addEventListener(_qt_DOMContentLoaded_qt__co_ function (){\n_lt_/p_gt_\n\n_lt_p_gt_\n\tconsole.log(_qt_Loaded Dom content_qt_)_sm__lt_br /_gt_\n\tvar canvas _eq_ document.getElementById(_qt_Main_qt_)_sm__lt_br /_gt_\n\tvar engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar scene _eq_ createScene()_sm__lt_br /_gt_\n\tscene.render()_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tfunction createScene() {\n_lt_/p_gt_\n\n_lt_p_gt_\n\t _lt_br /_gt_\n\t    var scene _eq_ new BABYLON.Scene(engine)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t     var camera _eq_ new BABYLON.FreeCamera(_qt_camera1_qt__co_ new BABYLON.Vector3(0_co_ 5_co_ -10)_co_ scene)_sm_   _lt_br /_gt_\n\t    camera.setTarget(BABYLON.Vector3.Zero())_sm__lt_br /_gt_\n\t    camera.attachControl(canvas_co_ true)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t _lt_br /_gt_\n\t   var light _eq_ new BABYLON.HemisphericLight(_qt_light1_qt__co_ new BABYLON.Vector3(0_co_ 2_co_ 0)_co_ scene)_sm__lt_br /_gt_\n\t    light.intensity _eq_ 0.9_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t _lt_br /_gt_\n\t    var sphere _eq_ BABYLON.Mesh.CreateSphere(_qt_sphere1_qt__co_ 16_co_ 2_co_ scene)_sm__lt_br /_gt_\n\t    var box _eq_ BABYLON.Mesh.CreateBox(_qt_box1_qt__co_2.0_co_scene)_sm__lt_br /_gt_\n\t _lt_br /_gt_\n\t    sphere.position.y _eq_ 3_sm_   _lt_br /_gt_\n\t    box.position.y _eq_ 1_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    var m1 _eq_ new BABYLON.StandardMaterial(_qt_material1_qt__co_scene)_sm__lt_br /_gt_\n\t    m1.diffuseColor _eq_ new BABYLON.Color3(1_co_0_co_0)_sm__lt_br /_gt_\n\t    sphere.material _eq_ m1_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\t    var m2 _eq_ new BABYLON.StandardMaterial(_qt_material2_qt__co_scene)_sm__lt_br /_gt_\n\t    m2.diffuseTexture _eq_ new BABYLON.Texture(_qt_paper.jpg_qt__co_scene)_sm_  // this is the problematic line of code_lt_br /_gt_\n\t    _lt_br /_gt_\n\t    box.material _eq_ m2_sm__lt_br /_gt_\n\t    _lt_br /_gt_\n\t    var ground _eq_ BABYLON.Mesh.CreateGround(_qt_ground1_qt__co_ 6_co_ 6_co_ 2_co_ scene)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t   return scene_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t}\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\t})_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t&lt_sm_/script&gt_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t&lt_sm_/body&gt_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t&lt_sm_html&gt_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MattJ","Date":"2017-10-08T05:49:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI solved this myself_co_ maybe this can be useful to other beginners too.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI should have been more accurate about the program structure.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUsing function call _qt_function createscene() _qt_ caused the problem. Must use _qt_var createscene _eq_ function() _qt_ - type of structure.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOne should always follow the instructions about the syntax and structure  to the detail_co_ of course.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]