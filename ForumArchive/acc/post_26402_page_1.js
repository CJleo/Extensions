[{"Owner":"Dad72","Date":"2016-11-15T13:53:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t I would like to serialize the scene but exclude terrain generated by heightmap. My goal would be to generate a file for the ground and another for the rest of the scene. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t I thought if it was possible to add an option to_dd_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_em_gt_BABYLON.SceneSerializer Serialize(scene_co_ _lt_strong_gt_excludeMesh_lt_/strong_gt_)_sm__lt_/em_gt_ _lt_span style_eq__qt_color_dd_#008000_sm__qt__gt__lt_em_gt_// With arry for excludeMesh_lt_/em_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tAnd to do better_co_ by adding an array to excludeMesh_co_ one could even exclude several objects which would be better. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t What do you think about the Deltakosh idea?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-11-15T18:05:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have an idea.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tPlease look at  _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Tools/babylon.sceneSerializer.js#L20_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Tools/babylon.sceneSerializer.js#L20_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe can make that _lt_strong_gt__lt_em_gt_IF_lt_/em_gt__lt_/strong_gt_ statement... return FALSE... I think...\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_\tvar tmpsto _eq_ BABYLON.Geometry.Primitives.Ground_sm_\n\tBABYLON.Geometry.Primitives.Ground _eq_ 0_sm_\n\t// do serialize here\n\tBABYLON.Geometry.Primitives.Ground _eq_ tmpsto_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIn theory_co_ this should cause the serializer to ignore grounds.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Not sure_co_ though.  Kind of crazy idea.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou could also add property to Babylon.Node... perhaps Node.SerializationRoute.  Then_co_ re-code BJS serializer (or use custom). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSimilar-to steerable chute on the back of a Ready-Mix cement truck.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor each node serialization_co_ if node.serializationRoute _eq_ _qt_pile2_qt_ then output to pile #2.  Else output to pile #1.  Also weird.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPerhaps... BJS serializer could have customOutputRouter add-on.  Similar to particleSystem.customUpdateFunction.  User could easily write a custom output router for the serializer.  *shrug*    Just some goofy Wingnut ideas.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-11-15T18:30:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis could be an idea_co_ I will try_co_ but I would love to know what Deltakosh thinks of the idea of excluding objects from the scene serializer. _lt_br /_gt_\n\tMay be that I can attempt to create a PR for this if DK does not have time to do so.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI did this by taking up your idea Wingnut_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var tmpsto _eq_ BABYLON.Geometry.Primitives.Ground_sm_\nBABYLON.Geometry.Primitives.Ground _eq_ 0_sm_\t\nvar serializedScene _eq_ BABYLON.SceneSerializer.Serialize(global.scene)_sm_\t\nBABYLON.Geometry.Primitives.Ground _eq_ tmpsto_sm_\nvar serializedGround _eq_ BABYLON.SceneSerializer.SerializeMesh(global.terrain)_sm_\t\t\nvar str_scene _eq_ JSON.stringify(serializedScene)_sm_\nvar str_ground _eq_ JSON.stringify(serializedGround)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-11-15T18:37:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tExcludedMeshes would be somewhat weak.  ExcludedNodes might be better.  Include/Exclude lights and cameras_co_ too.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-11-15T18:39:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes indeed. I would need to exclude a grid as well_dd_ BABYLON.MeshBuilder.CreateLineSystem\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut I do not see how to do it with the same idea.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-11-15T19:00:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tLinesMesh might be done in line 33...  _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Tools/babylon.sceneSerializer.js#L33_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Tools/babylon.sceneSerializer.js#L33_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou could add some _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1EBCJY%233_qt_ rel_eq__qt_external nofollow_qt__gt_LinesMesh_lt_/a_gt_ to a scene_co_ and do some tests.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have another idea.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tlinesMesh._geometry.serializeVerticeData _eq_ function() { return_sm_ }\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat should kill it dead.  heh  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNotice I recently edited this.  I removed parentheses after serializeVerticeData\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-11-15T19:12:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYou would probably want to take into account child meshes too.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DigiHz Data","Date":"2016-11-17T19:51:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_151139_qt_ data-ipsquote-contentid_eq__qt_26402_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1479217981_qt_ data-ipsquote-userid_eq__qt_5292_qt_ data-ipsquote-username_eq__qt_Dad72_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 2016-11-15 at 2_dd_53 PM_co_ Dad72 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHello_co_ \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t I would like to serialize the scene but exclude terrain generated by heightmap. My goal would be to generate a file for the ground and another for the rest of the scene. \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t I thought if it was possible to add an option to_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tAnd to do better_co_ by adding an array to excludeMesh_co_ one could even exclude several objects which would be better. \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t What do you think about the Deltakosh idea?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThank you\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI have another idea for this to.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI believe that you are talking about exluding things from within your editor _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5292_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/_qt_ rel_eq__qt__qt__gt_@Dad72_lt_/a_gt_ ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhy we not have_dd_\n_lt_/p_gt_\n\n_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t_lt_p_gt_\n\t\t_lt_em_gt_BABYLON.SceneSerializer Serialize(scene_co_ _lt_strong_gt_excludePrefix_lt_/strong_gt_)_sm__lt_/em_gt_\n\t_lt_/p_gt_\n\n\t_lt_p_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_Example._lt_/span_gt_\n\t_lt_/p_gt_\n\n\t_lt_p_gt_\n\t\t_lt_em_gt_BABYLON.SceneSerializer Serialize(scene_co_ _lt_strong_gt__qt___qt__lt_/strong_gt_)_sm__lt_/em_gt_\n\t_lt_/p_gt_\n\n\t_lt_p_gt_\n\t\t_lt_em_gt_Every thing that starts with an underscore will be ignored by the serializer(IF excludePrefix is set)._lt_/em_gt_\n\t_lt_/p_gt_\n\n\t_lt_p_gt_\n\t\t_lt_em_gt_If there is an id of _myEditorMesh_co_ then this mesh will be exluded from the serialization(IF excludePrefix is set)._lt_/em_gt_\n\t_lt_/p_gt_\n\n\t_lt_p_gt_\n\t\tSince everything has an id_co_ this would be the easyest thing to implement i think.\n\t_lt_/p_gt_\n\n\t_lt_p_gt_\n\t\tWhat you all think about that?\n\t_lt_/p_gt_\n\n\t_lt_p_gt_\n\t\tEDIT_dd_\n\t_lt_/p_gt_\n\n\t_lt_p_gt_\n\t\t_lt_em_gt__lt_strong_gt_excludePrefix _lt_/strong_gt__lt_/em_gt_could be an array to maybe?\n\t_lt_/p_gt_\n\n\t_lt_p_gt_\n\t\tExample_dd_\n\t_lt_/p_gt_\n\n\t_lt_p_gt_\n\t\tIf you created an editor....\n\t_lt_/p_gt_\n\n\t_lt_p_gt_\n\t\tYou use some meshes and materials as defaults in your editor.....\n\t_lt_/p_gt_\n\n\t_lt_p_gt_\n\t\tYou as a developer sets the editors meshes id_t_s to eg_dd_ _myEditorMeshes1 and _myEditorMeshes2\n\t_lt_/p_gt_\n\n\t_lt_p_gt_\n\t\tYou as a developer sets the editors materials id_t_s to eg_dd_ _myEditorMaterials1 and _myEditorMaterials2\n\t_lt_/p_gt_\n\n\t_lt_p_gt_\n\t\tIn your editor a user creates meshes and materials (BUT you restict the use of the prefix).(User can not create meshes with an id that starts with _lt_strong_gt__myEditorMeshes_co_  _lt_/strong_gt_and the user can not create materials with an id that starts with _lt_strong_gt__myEditorMaterials_lt_/strong_gt_).\n\t_lt_/p_gt_\n\n\t_lt_p_gt_\n\t\teg_dd__lt_em_gt_BABYLON.SceneSerializer Serialize(scene_co_ _lt_strong_gt__qt__myEditorMeshes_co__myEditorMaterials_qt__lt_/strong_gt_)_sm__lt_/em_gt_\n\t_lt_/p_gt_\n\n\t_lt_p_gt_\n\t\tNow....when serialized... all things are serialized_co_ but not the editors meshes or materials.(if _lt_strong_gt_excludePrefix_lt_/strong_gt_ is set)\n\t_lt_/p_gt_\n\n\t_lt_p_gt_\n\t\tIf _lt_strong_gt_excludePrefix_lt_/strong_gt_ is NOT set_co_ then everything is serialized.\n\t_lt_/p_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-11-17T23:28:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello GigiHz_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou idea seems good. It is a can the idea that I made. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThink you do it?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__lt_/span_gt_  What do you think of the above idea?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DigiHz Data","Date":"2016-11-18T00:17:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5292_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/_qt_ rel_eq__qt__qt__gt_@Dad72_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHmmmmm......i not get you.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_qt_ It is a can the idea that I made _qt_???\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThink i can do what?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-11-18T02:11:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMake a PR with your idea.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSorry_co_ if my English is not very good sometimes_co_ I use a translator that is not always very good.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DigiHz Data","Date":"2016-11-18T05:29:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5292_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/_qt_ rel_eq__qt__qt__gt_@Dad72_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou think that my idea is better than your_t_s?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s first see what _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ think about both of our idea_t_s.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway....if we do this_co_ then we need to discuss further.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-11-18T17:03:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI would prefer adding a Node.doNotSerialize property _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-11-18T18:11:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIt is even better in my opinion. Thanks DK _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DigiHz Data","Date":"2016-11-19T13:15:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo you understand what DeltaKosh mean _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5292_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/_qt_ rel_eq__qt__qt__gt_@Dad72_lt_/a_gt_?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCould you give me an example Dad72? Because i do not completely get what DeltaKosh mean.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd.....Who will do this implementation?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-11-19T13:26:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSimple_co_ in fact it will suffice to do for example_dd_ mesh.doNotSerialize _eq_ true_sm_ _lt_br /_gt_\n\t and when serializing_co_ the object or node will not serialize.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs that your DK idea_co_ if I_t_m not mistaken?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DigiHz Data","Date":"2016-11-19T13:30:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5292_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/_qt_ rel_eq__qt__qt__gt_@Dad72_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tmesh.doNotSerialize _eq_ true_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat will only exlude 1 mesh?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-11-19T13:32:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYes_co_ it is enough to exclude all the objects that you want then.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DigiHz Data","Date":"2016-11-19T13:35:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI don_t_t get it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFrom your original post here you wanted to be able to exclude only 1 mesh or to have to option to exclude many meshes?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t see the point in implementing functionality for excluding only 1 mesh.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DigiHz Data","Date":"2016-11-19T13:43:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tLet me explain how i have to do when i serialize a scene from my editor as the serialisation works right now.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1.Before i serialize my scene_co_ i have to remove all my meshes_co_ materials and editor camera that my editor is using from the scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. Then i do the serialization.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3. I have to recreate my meshes_co_materials and editor camera that my editor is using.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe meshes in my editor are pseudo meshes for showing where light_t_s and cameras are in the scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd the materials are materials for giving those meshes a different look.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tConclusion_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf we get an implementation of a functionality to the serilazer_co_ then people with editors don_t_t have to do these steps (1 to 3).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-11-21T17:32:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIn this case_co_ before serializing your scene_co_ you just need to go through all your pseudo meshes and do myMesh.doNotSerialize _eq_ true and that_t_s it \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNo need for delete/recreate\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-11-21T17:37:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Tools/babylon.sceneSerializer.ts#L330_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Tools/babylon.sceneSerializer.ts#L330_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DigiHz Data","Date":"2016-11-21T18:34:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI see that you allready started to implement this yes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor cameras_co_ lights and meshes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat about materials_co_ instances and textures?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think it would be good to have the option to not serialize materials_co_ _lt_span_gt_instances or textures_lt_/span_gt_ to. (Maybe multimaterials to?).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tdoNotSerialize is a property of a mesh_co_light_co_camera?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSame as eg_dd_ camera.fov _eq_ 0.8\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcamera.doNotSerialize _eq_ true_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think your solution is a great idea_co_ and _lt_span_gt_@dad72_lt_/span_gt_ will be happy to about this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-11-21T22:34:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tmaterial and textures are tied to mesh. So if the mesh is not serialized then the textures and material attached to it won_t_t be serialized either.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t(Yes doNotSerialize is a property _dd_))\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DigiHz Data","Date":"2016-11-21T22:38:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAnd instances of a mesh will not be serialized either?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]