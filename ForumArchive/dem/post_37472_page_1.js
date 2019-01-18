[{"Owner":"JBatUN","Date":"2018-05-07T13:01:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGreetings all_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m new to Babylon and this forum (first post) but wanted to share a project I_t_ve been working on in case anyone is interested.  I_t_m attaching a few screen shots of a data visualization authoring tool that provides views for planar and spherical maps_co_ graphs_co_ trees_co_ and most conventional charts (cartesian and polar).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe platform is based on Electron.js (to enable file system support)_co_ Vue.js (for property management)_co_ Polymer (to componentize the interface)_co_ and D3.js which is used for the data manipulation_co_ e.g. parsing_co_ scales_co_ layouts_co_ geo projections_co_ etc.  Of course Babylon is used for all the rendering.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOnce I clean up all the code I_t_ll share the work on github with hopes others will be interested and possibly contribute.   My goal is to have a blender-like authoring tool for data visualization.  As you can see from the screen shots_co_ I_t_m trying to expose all the properties needed to configure a custom view with all the benefits of Babylon.  As part of my learning process I_t_ve tried to implement just about every feature available from materials_co_ textures_co_ post processing_co_ geometry_co_ etc.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEventually I have a few questions on some challenges I_t_ve faced.  One of the key features we need is to be able to export a scene for use in an authoring tool such as Blender or Maya.  This is to develop camera fly-throughs and other data oriented storyboards.  I_t_ve been trying to use the GLB serializer but it appears there are some issues with lines_co_ etc.  I also struggle a lot with text rendering.  Looking forward to posting some questions and benefitting from all the expertise of the community.  Although this is my first post_co_ I_t_ve consulted the forum for support at least a thousand times!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ hope some find this interesting and eager to hear your feedback.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJB\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_05/cartesian_bubble_plot.png.cc13814798a8b46db964ce9568792870.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_18150_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_05/cartesian_bubble_plot.png.cc13814798a8b46db964ce9568792870.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_cartesian_bubble_plot.png_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_05/cartesian_data_terrain.png.c8638fba97bd1b08edffddb94e0a3f6e.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_18151_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_05/cartesian_data_terrain.png.c8638fba97bd1b08edffddb94e0a3f6e.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_cartesian_data_terrain.png_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_05/planar_link_map_with_effect.png.4ba5e7abb733abd0485b1d8a641764ae.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_18152_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_05/planar_link_map_with_effect.png.4ba5e7abb733abd0485b1d8a641764ae.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_planar_link_map_with_effect.png_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_05/planar_map_points.png.56ee191a47a56921122ccbaa7fbae4c3.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_18153_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_05/planar_map_points.png.56ee191a47a56921122ccbaa7fbae4c3.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_planar_map_points.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-05-09T06:09:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is an amazing project ! and something we have been discussing a few  times. Do you have an online deployed version we could take a look at ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAbout the issues with glb serialiazition let me add _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26831_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26831-bghgary/_qt_ rel_eq__qt__qt__gt_@bghgary_lt_/a_gt_ to the thread.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tConcerning the text_co_ could you detail a bit more your issues in a new thread in the Questions and Answers questions ? I bet _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ will fix it in less time I am writing my answers as Gui is its baby pet _lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JBatUN","Date":"2018-05-09T18:23:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSebavan_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for the words of encouragement!!!  Unfortunately_co_ I don_t_t have an online deployed version yet and now the app is significantly coded for working in the Electron environment.  This was necessary to enable a user to select the csv files used for the visualization_co_ and eventually save files.  I_t_m moving at a pretty fast pace and should have the code in Github within a week or two.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the meantime_co_ a few more details for those that might be interested.  The approach provides for virtually any type of data visualization.  Currently the following models are available_dd_ planar point map_co_ link map_co_ time map_co_ time path map (e.g. to see flights over time)_sm_ sphere based map (globe) for all the same_sm_ force directed and sankey graphs_co_ several tree layouts (e.g. cartesian_co_ radial_co_ treemap_co_ circle packing_co_ etc.)_co_ and finally cartesian and polar based charts (using any geometry).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe integration with D3.js and Babylon.js makes all the above fairly easy.  D3 loads the csv_co_ parses it_co_ and generates the layout_co_ scales (e.g. Linear_co_ Log_co_ Pow_co_ Sqrt_co_ or geospatial).  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tfunction loadData(url) {\n_lt_/p_gt_\n\n_lt_p_gt_\n\t      d3.csv(url_co_ function (error_co_ data) {_lt_br /_gt_\n\t         data.forEach(function (d) {_lt_br /_gt_\n\t            d.lfield _eq_ d.lfield_sm__lt_br /_gt_\n\t            d.lat _eq_ +d.lat_sm__lt_br /_gt_\n\t            d.long _eq_ +d.long_sm__lt_br /_gt_\n\t            d.coords _eq_ [+d.long_co_ +d.lat]_sm__lt_br /_gt_\n\t            d.zfield _eq_ +d.zfield_sm__lt_br /_gt_\n\t            d.sfield _eq_ +d.zfield_sm__lt_br /_gt_\n\t            d.cfield _eq_ d.zfield_sm__lt_br /_gt_\n\t         })_sm__lt_br /_gt_\n\t         renderData(data)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t      })_sm__lt_br /_gt_\n\t   }\n_lt_/p_gt_\n\n_lt_p_gt_\n\tExample of a sizing scale_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar zExtent _eq_ d3.extent(data_co_ function (d) { return d.zfield })_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar zScale _eq_ d3.scaleLinear()_lt_br /_gt_\n\t                .domain(zExtent)_lt_br /_gt_\n\t                .range([0_co_ 50])_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOnce D3 is done_co_ all the coordinates and properties are available for Babylon to consume and render based on the view model.  Depending on the view model_co_ a coordinate transform function generates the sphere_co_ polar_co_ radial_co_ etc. coordinates.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe Babylon particle system then does all the magic_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tsps.initParticles _eq_ function () {_lt_br /_gt_\n\t         var p _eq_ 0_sm__lt_br /_gt_\n\t         for (var i _eq_ 0_sm_ i &lt_sm_ data.length_sm_ i++) {\n_lt_/p_gt_\n\n_lt_p_gt_\n\t            // data variables_lt_br /_gt_\n\t            var obj _eq_ data_lt_em_gt__sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t            var n _eq_ obj.lfield_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t            var v _eq_ obj.zfield_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t            var z _eq_ zScale(obj.zfield)_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t            var r _eq_ rScale(obj.rfield)_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t            var s _eq_ sScale(obj.sfield)_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t            var c _eq_ cScale(obj.cfield)_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t            var coords _eq_ (obj.coords)_sm_\n_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n\n_lt_/em_gt__lt_p_gt__lt_em_gt_\n\t            // scale by z_lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t            sps.particles[p].scale.y _eq_ z_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t            // reset to account for center origin of geometry_lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t            var offset _eq_ sps.particles[p].scale.y_sm_\n_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n\n_lt_/em_gt__lt_p_gt__lt_em_gt_\n\t            // set position by coords_lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t            var position _eq_ gcoordsph(coords_co_ offset)_sm_ // geospatial coordinate transform based on projection_lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t            sps.particles[p].position.x _eq_ position.x_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t            sps.particles[p].position.y _eq_ position.y_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t            sps.particles[p].position.z _eq_ position.z_sm_\n_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n\n_lt_/em_gt__lt_p_gt__lt_em_gt_\n\t            // set color by variable_lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t            sps.particles[p].color _eq_ new BABYLON.Color3.FromHexString(c)_sm_\n_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n\n_lt_/em_gt__lt_p_gt__lt_em_gt_\n\t            // Used for tooltips_lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t            sps.particles[p].metadata _eq_ [n_co_v]_sm_ // adds name of each object\n_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n\n_lt_/em_gt__lt_p_gt__lt_em_gt_\n\t            p++_sm__lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t         }_lt_/em_gt__lt_br /_gt__lt_em_gt_\n\t      } // end init function\n_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n\n_lt_/em_gt__lt_p_gt__lt_em_gt_\n\tSo far the performance for 1000+ data points has been excellent.  The only exception is for cases where labels are used like in the example attached (World Country Tree with Population).  It takes several seconds to render.  I_t_m sure a lot of it has to do with my own errors in coding.  However_co_ for a few reasons_co_ the dynamic texture approach is not ideal for this purpose - hoping there is a possibility to implement a vector_co_ svg like approach for text rendering.\n_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n\n_lt_/em_gt__lt_p_gt__lt_em_gt_\n\tOne key note is that I named it Cambro (Camera in Esperanto) to strictly limiting the scope to visualization and not data manipulation.  Each view expects a specific data model as a csv file. If the file fits the model_co_ you can map the visual properties for all of the fields.  I_t_m working towards exposing virtually all the properties available to create a fully customized scene.\n_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n\n_lt_/em_gt__lt_p_gt__lt_em_gt_\n\tWill definitely be posting some questions soon to get the needed expert advice.\n_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n\n_lt_/em_gt__lt_p_gt__lt_em_gt_\n\tThanks again!  Cheers_co_\n_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n\n_lt_/em_gt__lt_p_gt__lt_em_gt_\n\tJB\n_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n_lt_/em_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_05/World-Country-Tree-Population.png.e099e44716b9b572f2ba26fcd6095726.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_18203_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_05/World-Country-Tree-Population.thumb.png.5484237960298da189fb8b5336b4f815.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_World-Country-Tree-Population.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bghgary","Date":"2018-05-10T20:13:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_214066_qt_ data-ipsquote-contentid_eq__qt_37472_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1525698106_qt_ data-ipsquote-userid_eq__qt_31403_qt_ data-ipsquote-username_eq__qt_JBatUN_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn ‎5‎/‎7‎/‎2018 at 6_dd_01 AM_co_ JBatUN said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI_t_ve been trying to use the GLB serializer but it appears there are some issues with lines_co_ etc_lt_span_gt_﻿_lt_/span_gt_._lt_span_gt_﻿_lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/31403-jbatun/?do_eq_hovercard_qt_ data-mentionid_eq__qt_31403_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/31403-jbatun/_qt_ rel_eq__qt__qt__gt_@JBatUN_lt_/a_gt_ Can you explain more about what kind of issues you are having with the serializer?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JBatUN","Date":"2018-05-10T22:17:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_ve only run a few quick tests and am not sure yet how the serializer will work with all the visualization types_co_ but in my initial tests I found two issues_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1.) It didn_t_t seem to work on anything that had lines (the vector maps_co_ or axis in a chart)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2.) There were unpredictable behaviors when loading the file and rendering dynamic texture labels.  From what I can tell (if I use the glTF)_co_ these are treated as raster texture images.  Sometimes they show fine_co_ other times the backing plane is black_co_ etc.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAt this point I recognize that there are very good chances any issues I experience are because of my own coding and limited experience with Babylon.  I_t_m also testing the import with Blender_co_ Godot_co_ Babylon Editor_co_ and ClayJS ... each often renders differently.  Once I spend more time on the export capability I_t_ll understand more and will share the results.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-05-11T16:20:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tVery impressed with what you are doing.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_214340_qt_ data-ipsquote-contentid_eq__qt_37472_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1525890228_qt_ data-ipsquote-userid_eq__qt_31403_qt_ data-ipsquote-username_eq__qt_JBatUN_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 5/9/2018 at 7_dd_23 PM_co_ JBatUN said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThe only exception is for cases where labels are used like in the example attached (World Country Tree with Population).  It takes several seconds to render. ....................... However_co_ for a few reasons_co_ the dynamic texture approach is not ideal for this purpose\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tEven though you said that the dynamic texture approach is not ideal for you I could not help having a play around. What I have attempted is to use SPS for the labels by creating one dynamicTexture and then adding planes to the SPS of appropriate size. In the example I use a single array to give position_co_ rotation and text for each label but obviously can be adapted depending on the data source . The first PG has about 70 labels_co_ the second about 90 labels and the third about 120. After not may more labels my browser starts to ask if it should wait or stop. So I am probably not doing any better than your system. More of a proof of concept than anything else. Anyway just ignore if it is of no help.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#A9K31I_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#A9K31I_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#A9K31I%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#A9K31I#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#A9K31I%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#A9K31I#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlternative - have you seen this\n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed368569485_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/32422-3d-text-in-babylonjs-using-vectorize-text/?do_eq_embed_qt_ style_eq__qt_height_dd_344px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tthough I guess the number of vertices needed for lots of labels would slow everything down even more.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLooking forward to seeing your progress.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JBatUN","Date":"2018-05-11T16:42:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tJohnK_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for the test and playground examples!  It was very useful ... although I_t_m using SPS for all the geometry_co_ I was not using it for the labels.  Will take a close look at your examples as every little bit may help in performance.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ thanks for the 3D text link - was not aware.  I think you_t_re right though that the 3d geometry could add even more overhead.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIdeally_co_ 2d vector text would be the best option.  Something similar to SVG text rendering.  Basically line and curve paths.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEverything else is working so perfectly so I_t_m hoping a solution will prevail...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWill keep sharing progress and thanks again for the interest_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kcoley","Date":"2018-05-11T19:13:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/31403-jbatun/?do_eq_hovercard_qt_ data-mentionid_eq__qt_31403_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/31403-jbatun/_qt_ rel_eq__qt__qt__gt_@JBatUN_lt_/a_gt__co_  Awesome stuff you are doing!  I am working on the glTF serializer in Babylon.  I assume that you are using MeshBuilder.CreateLines ?  I currently have only implemented line behavior for geometry fill modes_co_ but I will add this to the list of features to add support for.  Do you happen to know of other things that are currently not working on export? \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JBatUN","Date":"2018-05-11T19:45:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWow - this community is awesome!  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo draw the topojson vector maps I use_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar vmap _eq_ BABYLON.MeshBuilder.CreateLineSystem(_qt_lineSystem_qt__co_ {lines_dd_ maplines}_co_ scene)_sm__lt_br /_gt_\n\tvmap.color _eq_ color_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn other cases_co_ like the flows among countries I use curves such as_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar links _eq_ getQuadraticBezierCurve(segments[0]_co_ segments[1]_co_ segments[2]_co_ 16)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(BABYLON.Curve3.CreateQuadraticBezier).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBasically_co_ I_t_m using just about every form of geometry that Babylon has to offer.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs for the serializer_co_ the lines and curves are the key right now.  For visuals that don_t_t have lines the output has been _lt_strong_gt_excellent_lt_/strong_gt_.  Great work!  It seems the bigger challenge is that tools have exporters (e.g. Maya) but don_t_t have the same capabilities for import.  So far each tool I use to view the GLB has a slightly different result.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe ClayGL viewer has been among the best_co_ but unfortunately not useful for my purpose.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//pissang.github.io/clay-viewer/editor/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//pissang.github.io/clay-viewer/editor/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy ultimate goal is to use Blender_co_ Maya or Cinema 4D to produce narrative stories with the visualization.  I am experimenting with a timeline / keyframe editor from within the application using _lt_a href_eq__qt_https_dd_//github.com/zz85/timeliner_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/zz85/timeliner_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for your support!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"The Leftover","Date":"2018-05-12T03:08:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tJohnK_co_ dang!  That_t_s an eye-opener.  I didn_t_t know we could do that. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a longstanding tendency to do things the hard way but my little adventure with text this week takes the cake.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JBatUN","Date":"2018-05-12T15:46:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_little adventure with text..._lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tLeftover - I was very interested in the text work you posted.  I could be wrong but it seems like these libs are similar to what you were doing and could be a potential approach to having 2d vector text.  Based on your experience_co_ curious what you think about these ... worth looking into further?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/mikolalysenko/vectorize-text_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/mikolalysenko/vectorize-text_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/xeolabs/xeogl/blob/81b1469b38c698d22b17a73895d2de18d6423c5d/examples/js/geometry/vectorTextGeometry.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/xeolabs/xeogl/blob/81b1469b38c698d22b17a73895d2de18d6423c5d/examples/js/geometry/vectorTextGeometry.js_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEager to hear your thoughts.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JBatUN","Date":"2018-05-15T01:19:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi all_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFollowing up on my last with some progress on creating a vector text capability based on the xeogl work.  Attached is a simple test with about 200 labels.  For our purpose_co_ we_t_re happy with the results.  The text has a CAD like appearance and is rendered with a line system.  It does also work with Tube for a 3D appearance but the performance was significantly effected as expected.  If anyone is interested and needs a simple vector text approach we_t_d be happy to share the code.  Kcoley - I think this should work well with the glTF serializer once you have the time to include line geometry.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJB\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_05/Vector-Text.png.3815089dbb7761a440ddf03ff2584fc0.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_18283_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_05/Vector-Text.thumb.png.7c29f8d36feb2d31fa99541584a1b1c3.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Vector-Text.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kcoley","Date":"2018-05-15T18:26:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/31403-jbatun/?do_eq_hovercard_qt_ data-mentionid_eq__qt_31403_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/31403-jbatun/_qt_ rel_eq__qt__qt__gt_@JBatUN_lt_/a_gt_ nice! Sounds good_co_ I’ll add line support to the list of features to implement for the exporter. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JBatUN","Date":"2018-05-19T07:08:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/30070-kcoley/?do_eq_hovercard_qt_ data-mentionid_eq__qt_30070_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/30070-kcoley/_qt_ rel_eq__qt__qt__gt_@kcoley_lt_/a_gt_ not sure if this is helpful for your glTF serializer work_co_ but aside from the export of lines_co_ I_t_m also getting the following error message_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBJS - [02_dd_58_dd_48]_dd_ Material type ShaderMaterial for material colorShader is not yet implemented in glTF serializer.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ if you need some extensive testing for your updates_co_ would be happy to help.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Spankied","Date":"2018-05-20T01:19:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\twhat UI library are u using?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JBatUN","Date":"2018-05-20T01:53:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/26809-spankied/?do_eq_hovercard_qt_ data-mentionid_eq__qt_26809_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/26809-spankied/_qt_ rel_eq__qt__qt__gt_@Spankied_lt_/a_gt_  I_t_m not using a UI Library per se if you mean frameworks like Bootstrap.  Not sure if this answers your question_co_ but here are a few additional details...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Most of the UI components are based on Polymer and custom CSS.  I never used Polymer before but found it so easy_co_ it served the purpose to have reusable UI elements for each view.  All the elements are pretty much straight html as I_t_m trying to avoid dependencies.  I_t_m not event using Polymer components...just the framework for creating elements.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- These components are linked to a Vue.js model [component -&gt_sm_ Vue model -&gt_sm_ Babylon]\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Also_co_ I tend to use D3.js (for all it_t_s features) as a JQuery like event handler.  E.g_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar saveImage _eq_ d3.select(_qt_#saveImageFile_qt_)_sm__lt_br /_gt_\n\tsaveImage.on(_qt_click_qt__co_ function() {_lt_br /_gt_\n\t    BABYLON.Tools.CreateScreenshotUsingRenderTarget(engine_co_ camera_co_ 2048)_sm__lt_br /_gt_\n\t})_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLastly_co_ for now I_t_m borrowing the Blender icons (as svg) or creating my own.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet me know if you have any questions.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Spankied","Date":"2018-05-20T01:58:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo must of the styling is custom? Very nice.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kcoley","Date":"2018-05-20T04:30:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/31403-jbatun/?do_eq_hovercard_qt_ data-mentionid_eq__qt_31403_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/31403-jbatun/_qt_ rel_eq__qt__qt__gt_@JBatUN_lt_/a_gt__co_ that is very useful information. I will have to handle the LinesMesh with the exporter and the ShaderMaterial. Thanks for sharing_co_ and I would definitely appreciate any testing you can provide!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kcoley","Date":"2018-05-22T17:25:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/31403-jbatun/?do_eq_hovercard_qt_ data-mentionid_eq__qt_31403_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/31403-jbatun/_qt_ rel_eq__qt__qt__gt_@JBatUN_lt_/a_gt_.  I plan on having a fix for the lines issue by Friday at the latest.  I_t_m tracking progress on the lines issue here_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/issues/4196_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/issues/4196_lt_/a_gt_  .  I_t_ll let you know when I make the next update.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kcoley","Date":"2018-05-23T23:06:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/31403-jbatun/?do_eq_hovercard_qt_ data-mentionid_eq__qt_31403_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/31403-jbatun/_qt_ rel_eq__qt__qt__gt_@JBatUN_lt_/a_gt__co_ my update for lines support was recently merged to master.  Feel free to give it a try and let me know if you hit any other issues.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JBatUN","Date":"2018-05-24T02:02:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/30070-kcoley/?do_eq_hovercard_qt_ data-mentionid_eq__qt_30070_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/30070-kcoley/_qt_ rel_eq__qt__qt__gt_@kcoley_lt_/a_gt_  Wow - thanks!!!  I just tried the update with an example that is probably a good stress test (world map line system_co_ label lines_co_ etc.).  It_t_s hard for me to assess the update fully with the variances among the different GLB importers.  I_t_ve tried an exported file in the Babylon editor_co_ ClayGL viewer_co_ and Godot ... all have a different result.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere_t_s a chance some of the issues I_t_m facing are my own error_co_ but here_t_s the error message I receive when running the following code_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar glb _eq_ BABYLON.GLTF2Export.GLBAsync(scene_co_ _qt_sceneFile_qt_).then((glb) _eq_&gt_sm_ {_lt_br /_gt_\n\t    glb.downloadFiles()_sm__lt_br /_gt_\n\t    })_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_18392_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_05/1244124520_ScreenShot2018-05-23at9_47_42PM.png.46a735406d77888379cdc3f90ffcc9b4.png_qt_ alt_eq__qt_1244124520_ScreenShot2018-05-23at9_47_42PM.png.46a735406d77888379cdc3f90ffcc9b4.png_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m also including the GLB file in case you want to give it a try yourself.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks again for your great work!!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJB\n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_18393_qt__gt_sceneFile.glb_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"The Leftover","Date":"2018-05-24T14:04:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tJBatUN_co_ hello!  We are both working on data visualization_co_ as you noticed.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have focused on public web-based application of civic data.  The target is community_co_ leaders and so on.  Good luck to you!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JBatUN","Date":"2018-05-24T14:32:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/30070-kcoley/?do_eq_hovercard_qt_ data-mentionid_eq__qt_30070_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/30070-kcoley/_qt_ rel_eq__qt__qt__gt_@kcoley_lt_/a_gt_ I_t_ve done a some more experimenting and wanted to confirm that your update to include lines is working perfectly.  The map vectors and labels are rendering exactly as expected.  Awesome job!!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe issue I_t_m facing appears to relate to the coloring of the sps geometry_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tsps.particles[p].color _eq_ new BABYLON.Color3.FromHexString(c)_sm_  Where c is just a scale of hex values.  For all the editors I_t_ve tried these values are not included in the export.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29406-the-leftover/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29406_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29406-the-leftover/_qt_ rel_eq__qt__qt__gt_@The Leftover_lt_/a_gt_ I_t_m following your work closely especially your recent work with text rendering.  Very impressive.  We_t_re focused on humanitarian and development data for an international organization and hoping that this platform will enable us to create data driven stories about complex subjects.  Making quick progress on our authoring tool and will share on github as soon as possible.  Hoping others will find it useful and possibly contribute.  And good luck to you too!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2018-05-24T14:49:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tsps particles expect a color4_co_ not a color3... because they can handle the transparency\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JBatUN","Date":"2018-05-24T15:27:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_  Thanks for the tip.  I made the change to_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar rgb _eq_ new BABYLON.Color3.FromHexString(c)_sm__lt_br /_gt_\n\tsps.particles[p].color _eq_ new BABYLON.Color4(rgb.r_co_ rgb.g_co_ rgb.b_co_ 1)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tc is a data generated value in hex so I_t_m stuck with the conversion_co_ but the change is working well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tStill getting the error message on export_dd_  _lt_span style_eq__qt_background-color_dd_#fffbe6_sm_color_dd_#303942_sm_font-size_dd_11px_sm_text-align_dd_right_sm__qt__gt__lt_span style_eq__qt_color_dd_#545454_sm__qt__gt_babylon.js_dd_4_lt_/span_gt_ _lt_/span_gt__lt_span style_eq__qt_background-color_dd_#fffbe6_sm_color_dd_#5c3b00_sm_font-size_dd_11px_sm__qt__gt_BJS - [10_dd_55_dd_50]_dd_ Unsupported material type_dd_ colorShader_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn addition to the color shader a material is added with textures ... but this is also not coming through in the export.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m sure lot_t_s of user error here so I_t_ll keep experimenting.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]