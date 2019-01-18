[{"Owner":"Raitch","Date":"2017-06-08T12:08:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m trying to recreate this panoramic code (_lt_a href_eq__qt_https_dd_//github.com/spite/THREE.CubemapToEquirectangular/blob/master/src/CubemapToEquirectangular.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/spite/THREE.CubemapToEquirectangular/blob/master/src/CubemapToEquirectangular.js_lt_/a_gt_) from Three.js into Babylon.js.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMost stuff here it looks like I can replicate_co_ like ShaderMaterial for instance. The thing I however can_t_t wrap my head around fully is how to get the CubeCamera from Three.js to work in Babylon.js. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAccording to the documentation (_lt_a href_eq__qt_https_dd_//threejs.org/docs/#api/cameras/CubeCamera_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//threejs.org/docs/#api/cameras/CubeCamera_lt_/a_gt_) it seems to create 6 cameras and put them in a cube map_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_1182OS_04_17.png_qt_ class_eq__qt_ipsImage_qt_ src_eq__qt_https_dd_//www.packtpub.com/sites/default/files/Article-Images/1182OS_04_17.png_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m not fully sure how to best do the same thing in Babylon.js. The idea I guess is to have 6 cameras from the same point that each capture the same square_co_ then place all of them on one texture. However I want to do this rendering each frame so I guess that_t_s not really viable to do. Another idea I have is to use 2 canvases where one uses 6 mulitviews (_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/tutorials/how_to_use_multi-views_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/tutorials/how_to_use_multi-views_lt_/a_gt_) and the other canvas takes that image as a texture. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoes anyone have a better idea_co_ or know if my idea sounds unviable? Having 6 cameras run at the same time sounds potentially like a bad idea for me. If nothing else I can give it a try_co_ but it_t_s a lot of testing work I could avoid in case someone else have more insight than me on the subject. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI really like Babylon.js and I hope I can solve this without Three.js _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"max123","Date":"2017-06-08T12:34:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1P98HI%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1P98HI#1_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raitch","Date":"2017-06-08T13:04:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_177476_qt_ data-ipsquote-contentid_eq__qt_30930_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1496925288_qt_ data-ipsquote-userid_eq__qt_23143_qt_ data-ipsquote-username_eq__qt_max123_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t29 minutes ago_co_ max123 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1P98HI%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1P98HI#1_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI think we_t_re working from 2 different ends here. I want to generate Cube Maps_co_ not use existing. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-08T15:17:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhy not using the probe for that? It is doing exactly what you mention_dd_ create a cubemap from a point of view _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tHere is an example_dd__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#KA93U%2316_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#KA93U#16_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd doc_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/how_to_use_reflection_probes_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/how_to_use_reflection_probes_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raitch","Date":"2017-06-08T16:19:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tNice! That looks exactly like what I_t_m after _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ hope I can get it to work without too much lag\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]