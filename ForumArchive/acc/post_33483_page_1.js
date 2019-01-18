[{"Owner":"aldin_abdagic","Date":"2017-10-17T13:23:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_!DOCTYPE html&gt_sm_\n&lt_sm_html&gt_sm_\n    &lt_sm_head&gt_sm_\n        &lt_sm_meta http-equiv_eq__qt_Content-Type_qt_ content_eq__qt_text/html_sm_ charset_eq_utf-8_qt_ /&gt_sm_\n\n        &lt_sm_title&gt_sm_Babylon.js sample code&lt_sm_/title&gt_sm_\n        &lt_sm_!-- Babylon.js --&gt_sm_\n        &lt_sm_script src_eq__qt_https_dd_//www.babylonjs.com/hand.minified-1.2.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n        &lt_sm_script src_eq__qt_https_dd_//preview.babylonjs.com/cannon.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n        &lt_sm_script src_eq__qt_https_dd_//preview.babylonjs.com/oimo.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n        &lt_sm_script src_eq__qt_https_dd_//preview.babylonjs.com/babylon.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n        &lt_sm_style&gt_sm_\n            html_co_ body {\n                overflow_dd_ hidden_sm_\n                width_dd_ 100%_sm_\n                height_dd_ 100%_sm_\n                margin_dd_ 0_sm_\n                padding_dd_ 0_sm_\n            }\n\n            #renderCanvas {\n                width_dd_ 100%_sm_\n                height_dd_ 100%_sm_\n                touch-action_dd_ none_sm_\n            }\n\t\t\t\n\t\t\t#control{\n\t\t\t    width_dd_ 100%_sm_\n                height_dd_ 50px_sm_\n\t\t\t\tz-index_dd_ +1_sm_\n\t\t\t\tposition_dd_ fixed_sm_\n\t\t\t}\n        &lt_sm_/style&gt_sm_\n    &lt_sm_/head&gt_sm_\n&lt_sm_body&gt_sm_\n     &lt_sm_div id_eq__qt_control_qt_&gt_sm_\n\t     &lt_sm_button id_eq__qt_material1_qt_&gt_sm_Material1&lt_sm_/button&gt_sm_\n\t\t &lt_sm_button id_eq__qt_material2_qt_&gt_sm_Material2&lt_sm_/button&gt_sm_\n\t &lt_sm_/div&gt_sm_\n\t \n\t \n    &lt_sm_div id_eq__qt_canvasZone_qt_&gt_sm_\n        &lt_sm_canvas id_eq__qt_renderCanvas_qt_&gt_sm_&lt_sm_/canvas&gt_sm_\n    &lt_sm_/div&gt_sm_\n    &lt_sm_script&gt_sm_\n        var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_\n        var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_\n\n        var createScene _eq_ function () {\n            var scene _eq_ new BABYLON.Scene(engine)_sm_\n        \n            //Adding a light\n            var light _eq_ new BABYLON.PointLight(_qt_Omni_qt__co_ new BABYLON.Vector3(20_co_ 20_co_ 100)_co_ scene)_sm_\n        \n            //Adding an Arc Rotate Camera\n            var camera _eq_ new BABYLON.ArcRotateCamera(_qt_Camera_qt__co_ 0_co_ 0.8_co_ 100_co_ BABYLON.Vector3.Zero()_co_ scene)_sm_\n            camera.attachControl(canvas_co_ false)_sm_\n\t\t\t\n        \n            // The first parameter can be used to specify which mesh to import. Here we import all meshes\n            BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_scenes/_qt__co_ _qt_skull.babylon_qt__co_ scene_co_ function (newMeshes) {\n                // Set the target of the camera to the first imported mesh\n                camera.target _eq_ newMeshes[0]_sm_\n\t\t\t\t\n            })_sm_\n        \n            // Move the light with the camera\n            scene.registerBeforeRender(function () {\n                light.position _eq_ camera.position_sm_\n            })_sm_\n\t\t\t\n\t\t\tvar material1 _eq_ document.getElementById(_t_material1_t_)_co_ material2 _eq_ document.getElementById(_t_material2_t_)_sm_\n\n             material1.onclick _eq_ function() {\n\t\t\t\t    ????\n        \t\t}_sm_\n\t\t\t\t\n             material2.onclick _eq_ function() {\n\t\t\t\t    ????\n        \t\t}_sm_\n\t\t\t\n        \n            return scene_sm_\n        }\n        \n        var scene _eq_ createScene()_sm_\n\n        engine.runRenderLoop(function () {\n            scene.render()_sm_\n        })_sm_\n\n        // Resize\n        window.addEventListener(_qt_resize_qt__co_ function () {\n            engine.resize()_sm_\n        })_sm_\n    &lt_sm_/script&gt_sm_\n&lt_sm_/body&gt_sm_\n&lt_sm_/html&gt_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI need to click on the button to change the mesh to transparent or disappear_co_ and i need to press the button  to make the mesh change the texture.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-10-17T15:55:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI haven_t_t tested the following_co_ but you should use front and back references_co_ not the ID_t_s of the HTML elements.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMake a global_co_ or otherwise accessible variable to reference the imported mesh_co_ and give it a new material with a diffuseTexture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen change the properties like alpha and diffuseTexture whenever you need to.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_!DOCTYPE html&gt_sm_\n&lt_sm_html&gt_sm_\n    &lt_sm_head&gt_sm_\n        &lt_sm_meta http-equiv_eq__qt_Content-Type_qt_ content_eq__qt_text/html_sm_ charset_eq_utf-8_qt_ /&gt_sm_\n\n        &lt_sm_title&gt_sm_Babylon.js sample code&lt_sm_/title&gt_sm_\n        &lt_sm_!-- Babylon.js --&gt_sm_\n        &lt_sm_script src_eq__qt_https_dd_//www.babylonjs.com/hand.minified-1.2.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n        &lt_sm_script src_eq__qt_https_dd_//preview.babylonjs.com/cannon.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n        &lt_sm_script src_eq__qt_https_dd_//preview.babylonjs.com/oimo.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n        &lt_sm_script src_eq__qt_https_dd_//preview.babylonjs.com/babylon.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n        &lt_sm_style&gt_sm_\n            html_co_ body {\n                overflow_dd_ hidden_sm_\n                width_dd_ 100%_sm_\n                height_dd_ 100%_sm_\n                margin_dd_ 0_sm_\n                padding_dd_ 0_sm_\n            }\n\n            #renderCanvas {\n                width_dd_ 100%_sm_\n                height_dd_ 100%_sm_\n                touch-action_dd_ none_sm_\n            }\n\t\t\t\n\t\t\t#control{\n\t\t\t    width_dd_ 100%_sm_\n                height_dd_ 50px_sm_\n\t\t\t\tz-index_dd_ +1_sm_\n\t\t\t\tposition_dd_ fixed_sm_\n\t\t\t}\n        &lt_sm_/style&gt_sm_\n    &lt_sm_/head&gt_sm_\n&lt_sm_body&gt_sm_\n     &lt_sm_div id_eq__qt_control_qt_&gt_sm_\n\t     &lt_sm_button id_eq__qt_material1_qt_&gt_sm_Material1&lt_sm_/button&gt_sm_\n\t\t &lt_sm_button id_eq__qt_material2_qt_&gt_sm_Material2&lt_sm_/button&gt_sm_\n\t &lt_sm_/div&gt_sm_\n\t \n\t \n    &lt_sm_div id_eq__qt_canvasZone_qt_&gt_sm_\n        &lt_sm_canvas id_eq__qt_renderCanvas_qt_&gt_sm_&lt_sm_/canvas&gt_sm_\n    &lt_sm_/div&gt_sm_\n    &lt_sm_script&gt_sm_\n        var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_\n        var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_\n\n        var createScene _eq_ function () {\n            var mesh_sm_\n            var scene _eq_ new BABYLON.Scene(engine)_sm_\n        \n            //Adding a light\n            var light _eq_ new BABYLON.PointLight(_qt_Omni_qt__co_ new BABYLON.Vector3(20_co_ 20_co_ 100)_co_ scene)_sm_\n        \n            //Adding an Arc Rotate Camera\n            var camera _eq_ new BABYLON.ArcRotateCamera(_qt_Camera_qt__co_ 0_co_ 0.8_co_ 100_co_ BABYLON.Vector3.Zero()_co_ scene)_sm_\n            camera.attachControl(canvas_co_ false)_sm_\n\t\t\t\n        \n            // The first parameter can be used to specify which mesh to import. Here we import all meshes\n\n           var material _eq_ new BABYLON.Mater........\n           material.diffuseTexture _eq_ new BABYLON.Texture(_qt_grass.jpg_qt__co_ scene)_sm_\n           var texture2 _eq_ new BABYLON.Texture(_qt_amiga.jpg_qt__co_ scene)_sm_\n           \n  \n            BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_scenes/_qt__co_ _qt_skull.babylon_qt__co_ scene_co_ function (newMeshes) {\n                // Set the target of the camera to the first imported mesh\n                camera.target _eq_ newMeshes[0]_sm_\n\t\tmesh _eq_ newMeshes[0]_sm_\n                mesh.material _eq_ material_sm_\t\n                \n            })_sm_\n        \n            // Move the light with the camera\n            scene.registerBeforeRender(function () {\n                light.position _eq_ camera.position_sm_\n            })_sm_\n\t\t\t\n\t var front _eq_ document.getElementById(_t_material1_t_)_co_ back _eq_ document.getElementById(_t_material2_t_)_sm_\n\n         front.onclick _eq_ function() {\n\t    mesh.material.alpha _eq_ 0.2_sm_\n            //mesh.visibility _eq_ 0.2_sm_\n        \t}_sm_\n\t\t\t\t\n         back.onclick _eq_ function() {\n\t    mesh.material.diffuseTexture _eq_ texture2_sm_\n        \t}_sm_\n\t\t\t\n        \n            return scene_sm_\n        }\n        \n        var scene _eq_ createScene()_sm_\n\n        engine.runRenderLoop(function () {\n            scene.render()_sm_\n        })_sm_\n\n        // Resize\n        window.addEventListener(_qt_resize_qt__co_ function () {\n            engine.resize()_sm_\n        })_sm_\n    &lt_sm_/script&gt_sm_\n&lt_sm_/body&gt_sm_\n&lt_sm_/html&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-10-18T09:04:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA playground is always simpler - to understand_co_ to see_co_ and to help with. So_co_ here is a very simple scene that does that what you asked for - _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/index.html#VWUJA6_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/index.html#VWUJA6_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aldin_abdagic","Date":"2017-10-18T13:55:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tThank you for your reply. This is great. Transparency work yust fine. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_However_co_ if I insert the following codes and press the material2 button to change the texture_co_ nothing happens. I can not get my skin2. Where did I go wrong? it is abouth importMesh texsture.... skin1 and skin2 material...\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t \n_lt_/p_gt_\n\n_lt_pre style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n_lt_code style_eq__qt_font-size_dd_1em_sm__qt__gt_&lt_sm_!DOCTYPE html&gt_sm_\n&lt_sm_html&gt_sm_\n    &lt_sm_head&gt_sm_\n        &lt_sm_meta http-equiv_eq__qt_Content-Type_qt_ content_eq__qt_text/html_sm_ charset_eq_utf-8_qt_ /&gt_sm_\n\n        &lt_sm_title&gt_sm_Babylon.js sample code&lt_sm_/title&gt_sm_\n        &lt_sm_!-- Babylon.js --&gt_sm_\n        &lt_sm_script src_eq__qt_https_dd_//www.babylonjs.com/hand.minified-1.2.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n        &lt_sm_script src_eq__qt_https_dd_//preview.babylonjs.com/cannon.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n        &lt_sm_script src_eq__qt_https_dd_//preview.babylonjs.com/oimo.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n        &lt_sm_script src_eq__qt_https_dd_//preview.babylonjs.com/babylon.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n        &lt_sm_style&gt_sm_\n            html_co_ body {\n                overflow_dd_ hidden_sm_\n                width_dd_ 100%_sm_\n                height_dd_ 100%_sm_\n                margin_dd_ 0_sm_\n                padding_dd_ 0_sm_\n            }\n\n            #renderCanvas {\n                width_dd_ 100%_sm_\n                height_dd_ 100%_sm_\n                touch-action_dd_ none_sm_\n            }\n\t\t\t\n\t\t\t#control{\n\t\t\t    width_dd_ 100%_sm_\n                height_dd_ 50px_sm_\n\t\t\t\tz-index_dd_ +1_sm_\n\t\t\t\tposition_dd_ fixed_sm_\n\t\t\t}\n        &lt_sm_/style&gt_sm_\n    &lt_sm_/head&gt_sm_\n&lt_sm_body&gt_sm_\n     &lt_sm_div id_eq__qt_control_qt_&gt_sm_\n\t     &lt_sm_button id_eq__qt_material1_qt_&gt_sm_Material1&lt_sm_/button&gt_sm_\n\t\t &lt_sm_button id_eq__qt_material2_qt_&gt_sm_Material2&lt_sm_/button&gt_sm_\n\t &lt_sm_/div&gt_sm_\n\t \n\t \n    &lt_sm_div id_eq__qt_canvasZone_qt_&gt_sm_\n        &lt_sm_canvas id_eq__qt_renderCanvas_qt_&gt_sm_&lt_sm_/canvas&gt_sm_\n    &lt_sm_/div&gt_sm_\n    &lt_sm_script&gt_sm_\n        var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_\n        var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_\n\n        var createScene _eq_ function () {\n            var mesh_sm_\n            var scene _eq_ new BABYLON.Scene(engine)_sm_\n        \n            //Adding a light\n            var light _eq_ new BABYLON.PointLight(_qt_Omni_qt__co_ new BABYLON.Vector3(20_co_ 20_co_ 100)_co_ scene)_sm_\n        \n            //Adding an Arc Rotate Camera\n            var camera _eq_ new BABYLON.ArcRotateCamera(_qt_Camera_qt__co_ 0_co_ 0.8_co_ 100_co_ BABYLON.Vector3.Zero()_co_ scene)_sm_\n            camera.attachControl(canvas_co_ false)_sm_\n\t\t\t\n        \n            // The first parameter can be used to specify which mesh to import. Here we import all meshes\n\n            var skullmaterial _eq_ new BABYLON.StandardMaterial(_qt_skin.jpg_qt__co_ scene)_sm_\n\t\t\tskullmaterial.diffuseColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 7)_sm_  // green\n            skullmaterial.diffuseTexture _eq_ new BABYLON.Texture(_qt_skin.jpg_qt__co_ scene)_sm_\n            var texture2 _eq_ new BABYLON.diffuseTexture(_qt_skin2.jpg_qt__co_ scene)_sm_\n           \n  \n            BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_scenes/_qt__co_ _qt_skull.babylon_qt__co_ scene_co_ function (newMeshes) {\n                // Set the target of the camera to the first imported mesh\n                camera.target _eq_ newMeshes[0]_sm_\n\t\t\t\tcamera2.target _eq_ newMeshes[0]_sm_\n\t\t\t\tskull _eq_ newMeshes[0]_sm_\n                skull.material _eq_ skullmaterial_sm_\n\t\t\t\tskull.visibility _eq_ 1_sm_\n            })_sm_\t\n                \n            })_sm_\n        \n            // Move the light with the camera\n            scene.registerBeforeRender(function () {\n                light.position _eq_ camera.position_sm_\n            })_sm_\n\t\t\t\n\t var material1 _eq_ document.getElementById(_t_material1_t_)_co_ material2 _eq_ document.getElementById(_t_material2_t_)_sm_\n\n         material1.onclick _eq_ function() {\n\t          mesh.material.alpha _eq_ 0.2_sm_\n            //mesh.visibility _eq_ 0.2_sm_\n        \t}_sm_\n\t\t\t\t\n         material2.onclick _eq_ function() {\n\t         mesh.material.diffuseTexture _eq_ texture2_sm_\n        \t}_sm_\n\t\t\t\n        \n            return scene_sm_\n        }\n        \n        var scene _eq_ createScene()_sm_\n\n        engine.runRenderLoop(function () {\n            scene.render()_sm_\n        })_sm_\n\n        // Resize\n        window.addEventListener(_qt_resize_qt__co_ function () {\n            engine.resize()_sm_\n        })_sm_\n    &lt_sm_/script&gt_sm_\n&lt_sm_/body&gt_sm_\n&lt_sm_/html&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-10-18T15:56:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/28840-aldin_abdagic/?do_eq_hovercard_qt_ data-mentionid_eq__qt_28840_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/28840-aldin_abdagic/_qt_ rel_eq__qt__qt__gt_@aldin_abdagic_lt_/a_gt_ _lt_br /_gt__lt_br /_gt_\n\tThere_t_s no such thing as a _qt_BABYLON.diffuseTexture_qt_ _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_br /_gt_\n\tWhether a texture is a diffuseTexture is controlled in the material.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_-  var texture2 _eq_ new BABYLON.diffuseTexture(_qt_skin2.jpg_qt__co_ scene)_sm_\n+  var texture2 _eq_ new BABYLON.Texture(_qt_skin2.jpg_qt__co_ scene)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tFurthermore_co_ you defined _qt_var mesh_sm__qt__lt_br /_gt_\n\tand you are trying to change the material.diffuseTexture for _qt_mesh_qt_ when you click your buttons_lt_br /_gt_\n\tBut in your import_co_ you are setting _qt_skull _eq_  newMeshes[0]_sm__qt__lt_br /_gt_\n\tskull is not defined anywhere._lt_br /_gt__lt_br /_gt_\n\tIf i may suggest_sm_ _lt_a href_eq__qt_https_dd_//developer.mozilla.org/en-US/docs/Web/JavaScript/Guide_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//developer.mozilla.org/en-US/docs/Web/JavaScript/Guide_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-10-18T18:53:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys.  In PM_co_ AA and I... are talking.  I have a feeling that AA_t_s imported mesh (in his/her home project)... has multiple mesh and multiple materials.  So I have asked him/her questions about this_co_ and showed how to check length of newMeshes and scene.materials.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hope you don_t_t mind me revealing some PM discussion_co_ AA.  I won_t_t tell them about our secret gold mine_co_ I promise.  heh\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have also asked him/her to open a free github account and put his/her .babylon file and skin textures... into some folders there... so we can do playground work on them.  Meantime_co_ here_t_s are friend Dude... with a funny-looking torso texture.  Dude has been temporarily renamed _t_skull_t_.  The REAL skull model... has no UV_t_s.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com//#A4HF3%2315_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com//#A4HF3#15_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI also showed new-coder AA how it was somewhat important to put LOTS of _qt_stuff_qt_ inside the loader onSuccess area.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ we are slowly but surely getting AA up-to-speed.  He/She will soon be a pro.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tAfter I learn how many mesh and materials are used in AA_t_s model_co_ I will advance this PG series_co_ and activate some HTML buttons... and we_t_ll do some texture changing... like I did on the torso of our 6-mesh_co_ 5-material friend... Dude. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI also started teaching AA about UVs_co_ and how _lt_em_gt_some_lt_/em_gt_ models don_t_t have them.  Also_co_ teaching how to view .babylon files in Notepad or online JSON viewers... or via github (checking for UVs).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI wanted to report where we are... in AA_t_s BJS Orientation Class.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  I_t_m certainly no model-loading expert... but I think _t_we_t_ can get him/her started on a decent path.  Thx for your assistance_co_ aW!  We_t_ll get AA_t_s BJS go-cart fired-up and motoring down the trail_co_ no matter what it takes... right?  (ahem)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThen we_t_ll get back to the great _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/11513-mythros/?do_eq_hovercard_qt_ data-mentionid_eq__qt_11513_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/11513-mythros/_qt_ rel_eq__qt__qt__gt_@Mythros_lt_/a_gt_ player-slides-down-hills challenge... after some more doughnuts and coffee.  heh.  We haven_t_t forgotten about you_co_ Mythy_co_ but your challenge requires heavy work.  Physics or not_co_ is the big question... for your challenge.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Mythros","Date":"2017-10-19T00:13:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_What does this have to do with me_co_ brother?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t~M\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-10-19T02:18:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tNothing important.  I was only including your project in a short list of _qt_big future challenges_qt_.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Sorry if I caused an unwanted ping.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Mythros","Date":"2017-10-19T03:58:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t@wingnut it_t_s wanted actually. I REALLY need a demo fix for that slope code.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t~M\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-10-19T16:02:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHe seems to be using the skull model from the BabylonJS assets.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m not sure what_t_s going on here. Look at the following PG_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#D13XH6_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#D13XH6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tChanging the material/texture_co_ only changes the color while something called vertexColors are used for the blue-ish parts of the skulls material.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-10-19T18:17:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYeah_co_ no UVs. just _qt_colorKind_qt_ data.  Still though_co_ per-vertex colorKind data is nice.  It_t_s _qt_the forgotten material_qt_ in many ways... especially dynamically animating it.  _lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tIt will be rediscovered... alive and well_co_ in the ashes of dead HDR/PBR materials_co_ someday.  Jerome will hit a bad button one day_co_ and POOM_co_ a Mandelbrot fractal pattern will get painted into the skull_t_s colorKind buffer... and the angels will sing.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tOr_co_ maybe not.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI used the OPEN feature... at this joint... _lt_a href_eq__qt_http_dd_//jsoneditoronline.org/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jsoneditoronline.org/_lt_/a_gt_  to load this url...  _lt_a href_eq__qt_https_dd_//raw.githubusercontent.com/BabylonJS/Babylon.js/master/assets/meshes/skull.babylon_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//raw.githubusercontent.com/BabylonJS/Babylon.js/master/assets/meshes/skull.babylon_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt worked great_co_ and for once... my dog smiled approvingly.  hmm.  Maybe he_t_s sick.  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]