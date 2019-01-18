[{"Owner":"tomer","Date":"2018-05-07T17:23:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is pretty general any might be a little off topic_co_ but I_t_m looking for a way to create a normal map on a mesh created in 3dsMax.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want to create something like _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#LRFB2D%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#LRFB2D#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHelp will be very much appreciated. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-05-07T18:07:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t3dsMax has the ability to bake your meshes with the normal map._lt_br /_gt_\n\t_lt_br /_gt_\n\tThis would not be a BJS question but rather a 3ds question_co_ unless you already have your maps then_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/babylon101/materials_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/babylon101/materials_lt_/a_gt__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/more_materials_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/more_materials_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"tomer","Date":"2018-05-21T13:16:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello again_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSorry for the delay_co_ I understand that that_t_s a 3dsMax question but I_t_ve tried several technics to create the normal map but couldn_t_t export any of them.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI see the difference when I render the object on 3dsMax but when I export the mesh to a _qt_.babylon_qt_ file the normalTexture is null.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is how I create the material on 3dsmax.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_18359_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_05/2001532017_ScreenShot2018-05-21at16_15_30.png.626cc33f37859e45ce1b8454afccabba.png_qt_ alt_eq__qt_2001532017_ScreenShot2018-05-21at16_15_30.png.626cc33f37859e45ce1b8454afccabba.png_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2018-05-21T15:15:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think you have to not use the Normal Bump node_co_ just link the Bitmap node and you will probably be fine.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"tomer","Date":"2018-05-21T16:06:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_215676_qt_ data-ipsquote-contentid_eq__qt_37479_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1526915734_qt_ data-ipsquote-userid_eq__qt_20526_qt_ data-ipsquote-username_eq__qt_V!nc3r_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t49 minutes ago_co_ V!nc3r said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI think you have to not use the Nor_lt_span_gt_﻿_lt_/span_gt_mal Bump node_co_ just link the Bitmap node and you will probably be fine.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThanks for the quick reply_co_ but I_t_m not sure what you mean by _qt_Normal Bump node_qt__co_ please elaborate?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-05-21T17:09:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf you have that normal map already_co_ just apply it to the materials bump texture._lt_br /_gt_\n\t_lt_br /_gt_\n\tIn BJS the bump map is the normal map.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"tomer","Date":"2018-05-21T17:24:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBut should I do it manually? or the 3dsmax babylon exporter supports it?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(from a quick brief at the exporter source code it looks like the exporter should export normal maps for PBR materials)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2018-05-22T07:32:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI was just saying to remove this node_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_g3Abk89.png_qt_ class_eq__qt_ipsImage_qt_ height_eq__qt_406_qt_ src_eq__qt_https_dd_//i.imgur.com/g3Abk89.png_qt_ width_eq__qt_511_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"tomer","Date":"2018-05-22T09:20:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_215750_qt_ data-ipsquote-contentid_eq__qt_37479_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1526974342_qt_ data-ipsquote-userid_eq__qt_20526_qt_ data-ipsquote-username_eq__qt_V!nc3r_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ V!nc3r said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI was just saying to remove this node_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//i.imgur.com/g3Abk89.png_qt_ title_eq__qt_Enlarge image_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img alt_eq__qt_g3Abk89.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ height_eq__qt_406_qt_ src_eq__qt_https_dd_//i.imgur.com/g3Abk89.png_qt_ width_eq__qt_511_qt_ /_gt__lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t It worked! thanks a lot! _lt_span class_eq__qt_ipsEmoji_qt__gt_👑_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]