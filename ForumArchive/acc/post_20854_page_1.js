[{"Owner":"DesignVibe","Date":"2016-02-29T14:20:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi all\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am quite the newbie for Babylon.js but absolutely love it (_qt_thank you creators and contributors). I have searched numerous playgrounds / forums and found quite a few things to get me started and done well so far but came to a stopping point when realizing the complexity of steering.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI was wondering how to recreate the effect of steering from left or right like the examples below_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//bb-kirchengemein.de/car.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//bb-kirchengemein.de/car.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.visualiser.fr/Babylon/Drift/default.htm_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.visualiser.fr/Babylon/Drift/default.htm_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen steering left the wheels turn/pivot toward a max angle then the wheels stay at that position until keyup_co_ on which the wheels then turn/pivot back to their first position_co_ likewise when steering right but in the opposite direction.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t know if I should be looking at animations_co_ physics_co_ or good mathematics / JavaScript.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat I_t_m trying to create is the effect of a plane when banking left or right at a max angle of 22 degrees_co_ to then go back to zero / original axis when keyup.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA very basic playground has been created but is far from completion.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#22SLM4%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#22SLM4#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny help or suggestions would really be helpful _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-02-29T18:25:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello _lt_strong_gt__lt_a data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19554-designvibe/?do_eq_hovercard&amp_sm_referrer_eq_http%253A%252F%252Fwww.html5gamedevs.com%252Ftopic%252F20854-steering%252F_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19554-designvibe/_qt_ title_eq__qt_Go to DesignVibe_t_s profile_qt__gt_DesignVibe_lt_/a_gt__lt_/strong_gt_ ... welcome to the BabylonJS forum_co_ good to have you with us!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFirst_co_ may I show you _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/search/?&amp_sm_type_eq_forums_topic&amp_sm_nodes_eq_28_co_16_co_29_co_30_co_31_qt__gt_this link_lt_/a_gt_?  Bookmark that forever.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_  That is a link to the forum search_co_ with all 5 of our forum _t_nodes_t_ activated (see the numbers at the end of the URL?  *nod*)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIts a great place to go mining for info.  Some terms that you might try...  _lt_em_gt_flight sim_lt_/em_gt__co_ _lt_em_gt_turn the mesh_co_ vehicle_co_ _lt_/em_gt_and I think it would be wise to _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials_qt_ rel_eq__qt_external nofollow_qt__gt_visit our tutorials_lt_/a_gt_ .  Scroll down to see the long list_co_ but take note of #44... an EASY rotations tutorial that mentions mesh.rotate(...)_co_ a super-powerful way to get things turned.  If you want to advance further_co_ you can take-on the very advanced #39.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#IRNRP%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#IRNRP#2_lt_/a_gt_ is a pretty good playground with a vehicle that drives with WASD keys.  I don_t_t like the use of _t_window_t_ in there_co_ though.  That demo can be done without using _t_window_t_.  Also_co_ there_t_s a less-than-pro flight sim that somebody cobbled together... _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2FIXEM%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2FIXEM#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlthough that flight sim was for testing cameras (lots of camera BS in it)_co_ there is still some _qt_good stuff_qt_ in the lines 400+ area.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA chap named _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14782-dellafree/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14782_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14782-dellafree/_qt__gt_@DellaFree_lt_/a_gt_ built a flying game in a playground... it is pretty sweet.  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#6FFQW%2316_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#6FFQW#16_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA chap named _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13459-digitalhilsone/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13459_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13459-digitalhilsone/_qt__gt_@DigitalHilsone_lt_/a_gt_ started a thread... which led to all sorts of rotation/aiming work.  _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/14300-rotating-items/_qt__gt_Click here_lt_/a_gt__co_ if you wish. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tA BJS _qt_founder_qt_ and power-user named _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5218_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/_qt__gt_@Temechon_lt_/a_gt_ maintains a fine bucket-o-knowledge_co_ too.  _lt_a href_eq__qt_http_dd_//www.pixelcodr.com/projects.html_qt_ rel_eq__qt_external nofollow_qt__gt_Have a visit_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOk_co_ that should get you turning and rolling_co_ at least somewhat.  Again... welcome aboard_co_ and thanks for the kind words about BJS!  We_t_re here to help_co_ don_t_t hesitate to ask.  Party on!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DesignVibe","Date":"2016-02-29T18:51:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAbsolutely fantastic. thank you so much for your help Wingnut._lt_br_gt_\n\tI_t_ve really enjoyed your forum posts and demonstrations. especially the flying fourposter bed.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTip of the hat to you sir _eq_) \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-02-29T19:01:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWow_co_ what nice words_co_ thanks.  I think I_t_m going to enjoy having you around.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFellow forumers... notice the _qt_tip of the hat_qt_ comment_co_ _lt_u_gt_AND_lt_/u_gt_ DV_t_s emblem is a fellow tipping a hat?  Too cool!  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-03-01T11:34:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWant a car? you got a car! _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#UGMIH%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#UGMIH#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is partly using the new physics engine architecture and partly using modified native cannon.js code. It is planned to be integrated as a native option in the physics engine_co_ so you could use OimoJS as well to create a simple car.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDrive with your arrow keys_co_ flip the car with a mouse click.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is_co_ of course_co_ more work to do. I actually didn_t_t want to show this demo_co_ but since you asked_co_ and since I am working on it_co_ it fits. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DesignVibe","Date":"2016-03-01T12:12:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\twow_co_ nice one. Thank you Raanan. I_t_m really glad you showed us it. I feel like the rock biter driving this car _lt_img alt_eq__qt__dd_lol_dd__qt_ data-emoticon_eq__qt_true_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_laugh.png_qt_ title_eq__qt__dd_lol_dd__qt__gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DesignVibe","Date":"2016-03-01T12:28:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo how would you rotate the front wheels so that the movement doesn_t_t snap to the max angle but glides gently toward the max angle?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-03-01T12:33:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNotice that those are just impostors. You can hide them_co_ put your own meshes (that actually look nicer) and _qt_rotate_qt_ them according to the sphere_t_s impostor rotation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou could also very simply _qt_rotate left_qt_ when someone presses the left key_co_ and right when the right key is pressed_co_ ignoring the _qt_real_qt_ rotation of the spheres. Once you make the separation between design and physics_co_ you will have the best result you could achieve _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust as an example (part of the monthly challenge) - _lt_a href_eq__qt_http_dd_//raananweber.com/basketball/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//raananweber.com/basketball/_lt_/a_gt_ . The ball is an impostor covered with a different mesh_co_ and the board_co_ pole etc_t_ are simply hidden impostors. What_t_s on top is just for the scene to be nicer.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DesignVibe","Date":"2016-03-01T12:40:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOh this is brilliant. really do thank you for your help _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt__gt_@Wingnut_lt_/a_gt_ and _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt__gt_@RaananW_lt_/a_gt_. I_t_ve been trying to figure this out for weeks _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-03-01T13:12:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tRaanan_co_ you never cease to amaze me.  Great car_co_ and great basketball_co_ too.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRecently_co_ when you said _qt_Only a few days remaining_qt_ for your demo challenge...  I thought... _qt_Hey_co_ I wonder how fast I can make three walls with a meshImpostor waste basket in the corner_co_ and a crumpled ball of paper... with a sphere impostor._qt_  Wastebasket(-ball)_co_ 1.0.  hehe.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI know you mentioned _qt_horse_qt_ in other posts_co_ saying that you had built a version using multiple impostors on the rim.  But_co_ I never expected your half-court and basketball to look/work THAT GREAT!  Coooooool.  Look at that ball bounce!  NICE! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou win the challenge_co_ and so do the other applicants... because they are all enjoying playing horse on your half-court_co_ now_co_ and no longer doing any work.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\tIt is also the beginnings of _qt_Artillery Duel_qt_ and _qt_Howitzer Hell_qt_... funnery with gunnery!  Lob_t_n_t_Boom!  Arcade shooters!  You name it.  Yum!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBy chance_co_ did you use a spring instead of applyImpulse?  (I can check_co_ too).  I_t_ve never used a spring_co_ yet_co_ but Fenomas mentioned starting physics motion... using springs_co_ and that gave me a little physics woody.  _lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt__gt_  Maybe you used the _qt_apply a force_qt_ that _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5907-schteppe/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5907_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5907-schteppe/_qt__gt_@schteppe_lt_/a_gt_ spoke-of_co_ too.  Groundbreaking!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor those who don_t_t know Schteppe_co_ he is _qt_the man_qt_ who wrote CannonJS physics engine_co_ and he recently visited us_co_ and gave us a few power tips and pointers_co_ which I think Raanan instantly utilized.  The speed and fluidity of the basketball bouncing... sort of indicates that Raanan has been successful in the recent BJS-&gt_sm_CannonJS interface refactor.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHey DV... I only searched for playgrounds and I didn_t_t code anything.  (I don_t_t deserve any thanks.)   But Raanan... phew... excellent.  His car demo might be THE FIRST working heightMap terrain-jumping vehicle that has EVER worked in BJS_co_ AND he got that puppy into a playground!  Holy crapolas!  I bookmarked that thing SO HARD... that I broke-off a piece of my browser window!  _dd_)...   (&lt_sm_-- drooling)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow DV is going to flesh it out_co_ I bet.  Monster Truck 1.0.  Yeah!  Or may... Logging Truck - Rocky Mountain Challenge!  wow!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DesignVibe","Date":"2016-03-01T13:16:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHahaha. I thank the both of you as all information is helpful to give better direction and understanding on a topic._lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]