[{"Owner":"jerome","Date":"2018-05-23T07:42:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis time_co_ I won_t_t publish any demo but just an idea.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLooking at the existing demos with some environment reflection (usually done with some cube map and a fixed texture)_co_ I wondered if this could be a little more dynamic.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen you look carefully at this example from the BJS web site _lt_span_gt__dd_ _lt_/span_gt__lt_a href_eq__qt_https_dd_//www.studio-ramble3d.com/MakingOf_En.html_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.studio-ramble3d.com/MakingOf_En.html_lt_/a_gt_ you can see that the reflected environment on the robot surface is something like a room with_co_ probably_co_ some pieces of furniture_co_ a window_co_ the sky_co_ etc. Well_co_ a fixed texture under the hood.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut wouldn_t_t it be funnier if the robot could reflect _lt_u_gt_my own_lt_/u_gt_ real environment at the moment I_t_m watching the scene _dd_ my room_co_ my windows and maybe my face looking at it ? Let_t_s imagine that the texture used for the reflection would be caught from my webcam at some right time interval to keep a decent scene framerate and the feeling that the reflection is really live.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have no idea how to do this... but maybe someone of you would like to meet the challenge. There_t_s nothing to win except the eternal gratefulness from this community _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-05-23T15:21:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi J!  Cool challenge.  Nothing to win?  Pfft.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Oh that_t_s right_co_ I_t_m against competing_co_ anyway.  _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Although I_t_m not recommending a product_co_ I have a couple of these things... _lt_/span_gt__lt_a href_eq__qt_https_dd_//www.ebay.com/itm/Panorama-Remote-Control-Pan-Tilt-Mount-Adapter-For-Smart-Phone-Gopro-DSLR-Camera-/222761475157_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.ebay.com/itm/Panorama-Remote-Control-Pan-Tilt-Mount-Adapter-For-Smart-Phone-Gopro-DSLR-Camera-/222761475157_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlthough this thing is RF control_co_ the low-budget webcam I have Gorilla-taped to it... needs a USB cable connection.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you COULD get this pan/tilt device to aim itself... using BJS camera alpha/beta values_co_  the camera cord could get coiled around the pan-pivot shaft (after a few pan-spins of the BJS cam).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ you_t_d need an onboard-battery-operated camera_co_ with wireless transmit (battery eater)... and your pan and tilt device must do 360+ degrees of pan and tilt.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe _qt_rostrum thing_qt_ shown above_co_ does a decent 360 degrees beta/tilt/pitch_co_ but it will only do 355 degrees alpha/pan/yaw.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAND... when you look straight down (beta)... you_t_ll see the base of the rostrum device... and not the floor of the room.  (or_co_ if rostrum is mounted inverted like mine is_co_ you cannot see the ceiling.  The base of the rostrum device... gets in the way of the view of the ceiling.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSO_co_ there_t_s really 5 problems...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1.  Getting a wireless IP network cam... to run a decent amount of time on self-contained batteries (and still not weigh a ton)._lt_br /_gt_\n\t2.  Sending BJS camera angles to camera rostrum device... causing it to pan and tilt  (needs to be wireless)._lt_br /_gt_\n\t3.  Pan and tilt limits_co_ and view-blockages caused by base of rostrum device._lt_br /_gt_\n\t4.  Streaming live video from camera... into cubeMap textures or equirectangular texture for skydome/skybox.  (or Babylon.Layer - .isBackground _eq_ true)_sm__lt_br /_gt_\n\t5.  High prices on drugs and pain killers needed to think about this challenge.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThx for the URL_co_ J.  Are you involved with this project_co_ J?  (if it_t_s ok for me to ask).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"yuccai","Date":"2018-05-23T16:16:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve read something interesting about this but it uses multiples cameras.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.semanticscholar.org/paper/Synthesis-of-Environment-Maps-for-Mixed-Reality-Walton-Thomas/14181a7fafde2bd17a3b9e45a1415b1fa508537b_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.semanticscholar.org/paper/Synthesis-of-Environment-Maps-for-Mixed-Reality-Walton-Thomas/14181a7fafde2bd17a3b9e45a1415b1fa508537b_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBasically_co_ it acquires the environment and reflect it on 3d object.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe you can adapt this solution with only one low fov camera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you need more information_co_ the full paper or more resources_co_ just ask _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-05-23T17:19:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI could prolly pull this off..._lt_br /_gt_\n\t_lt_br /_gt_\n\tYou would just need to get the cameras input bound as a texture Channel.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthen convert that image to polar or cubic coordinate system_co_ then project it onto the mesh._lt_br /_gt_\n\t_lt_br /_gt_\n\tEffectively cub map support_co_ but with a couple extra steps.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2018-05-23T19:57:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tno_co_ I_t_m not in this project at all.  This is just an idea ... the ability to see the window on my left side_co_ the door on my right side of the office and my face all reflecting on a surface while looking at it\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-05-24T03:54:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI meant... are you involved in MakingOf_En site/people?  Know them/him/her/company?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI was confused about the wanted effect_co_ earlier.  I didn_t_t read Jerome_t_s post very well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI guess the cam would need to be across the room_co_ aimed back at user_co_ with FOV that is proper.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere_t_s many camera systems that publish a still pic from the camera... to a web/file server... once per minute or so.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAssetsManager texture task could be sent to retrieve a fresh picture (same URL over and over)... once per minute.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt could be done_co_ eh?  Periodically-acquired camera-grab reflection texture.  yuh yuh yuh... I think so.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2018-05-24T04:12:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tthat_t_s  what I understood_co_ Wingy _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ ... and I_t_m really not involved in this site.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]