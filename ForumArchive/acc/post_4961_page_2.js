[{"Owner":"Dad72","Date":"2014-04-02T12:01:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_Is a forgotten that this function _qt_(_lt_span_gt_BABYLON_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_0_co_102)_sm__qt__gt_Scene_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_prototype_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_getMeshesByTags_qt_ _lt_/span_gt_has not been add in babylon 1.10.0?_lt_/div_gt__lt_br_gt__lt_div_gt_It will be add?_lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_this code_dd_ _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/4961-user-data-in-mesh-object/?p_eq_30974_qt__gt_http_dd_//www.html5gamedevs.com/topic/4961-user-data-in-mesh-object/?p_eq_30974_lt_/a_gt__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-04-02T12:12:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Wow_co_ we were posting on the same thread at the same time_co_ Dad72!  Different subjects_co_ though.  Funny._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-04-02T12:25:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_happy.png_qt_ alt_eq__qt_^_^_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/happy@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ wingnut_co_ most of the engine are like that for good reasons. After that_co_ I do not seek to know the reasons_co_ I know that this is how_lt_/div_gt__lt_br_gt__lt_div_gt_They are naming conventions that are often found in engines._lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-04-02T13:26:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well_co_ I _lt_u_gt_do_lt_/u_gt_ want to know the reasons_co_ and babylon.js is not other engines.  It is an EASY engine.  But its learning curve gets steeper with every added function.  I will wait for further opinions_co_ but thank you for yours._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-04-02T13:39:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_As far I_t_m concerned_co_ it doesn_t_t bother me to have all these functions and internally they could use the one you suggest Wingnut but you_t_re right they are more helpers than _qt_must be there_qt_ functions and could easily put in the tools file and be static. We can suggest this to Deltakosh. Another suggestion I have_dd_ that would be nice to have tags and user data on meshes_co_ why not have them on cameras and lights too? My idea is to try to put as much as possible in Node and inherit everything from there. Moreover the functions could be overriden in sub classes such as Mesh._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Xanmia","Date":"2014-04-03T01:31:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I understand what you are saying @Wingnut with the more that is added the harder Babylon.js is to learn but i think thats where Deltakosh comes in and overrides our crazy ideas  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_.  Otherwise_co_ I like how Gwenael stated it and agree with the node approach._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-04-03T03:29:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes_co_ I agree with node being a good place to add these things_co_ but again_co_ that means cameras_co_ lights_co_ and mesh... all get another property (in their api documentation)_co_ and then likely..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_scene.getMeshesByTag(tagname)_lt_/p_gt__lt_p_gt_scene.getLightsByTag(tagname)_lt_/p_gt__lt_p_gt_scene.getCamerasByTag(tagname)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_... all get added to our already-bloated (imho) scene class.  *sigh*_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_3 properties added_co_ 3 methods added_co_ for one feature.  erf.  Do that enough and you become threeJS.  (dread)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I would love to see ALL the getFooByFoo() stuff... moved to Tools.  I doubt that will happen.  _qt_Too late_qt__co_ likely._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_BABYLON.Tools.getFooByFoo(Foo)?  *nod*  That would get those girly toys out of the way of us REAL men.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Real men do their own lookups from three power arrays... scene.meshes_co_ scene.lights_co_ and scene.cameras... with manly FOR-loops.  We iterate_co_ baby.  (huh?)  Anyway_co_ I have said all this _t_opinion_t_ of mine_co_ before.  As long as I get to play with babylon.js_co_ I am cool with whatever happens._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Maybe those three power arrays should be enumerables... maybe collections or vector objects... something even MORE manly.  j/k  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-04-03T16:04:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/pull/170_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/pull/170_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-04-04T09:42:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_30973_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_4961_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1395681277_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Eval is prohibited due to security issues with win8 _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Will be prohibited or already is? _lt_a href_eq__qt_http_dd_//msdn.microsoft.com/en-us/library/s4esdbwz%28v_eq_vs.94%29.aspx_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//msdn.microsoft.com/en-us/library/s4esdbwz%28v_eq_vs.94%29.aspx_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-04-05T15:51:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Already is (win8 apps using winjs)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-04-07T09:22:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok. Thank you. So I didn_t_t develop BABYLON.AndOrNotEvaluator for nothing _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Have you had time to check _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/pull/170?_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/pull/170_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-04-07T17:08:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Checked_co_ integrated_co_ serialized _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-04-08T11:01:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I saw you handled my TODO list. Thanks. I_t_ll write a wiki page for tags and Wingnut will check it and rewrite everything _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__co_ won_t_t he?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_Edit_dd_ wiki _lt_/strong_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/Tags_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/Tags_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2014-05-15T13_dd_31_dd_05Z_t_ title_eq__t_05/15/2014 01_dd_31  PM_t_ data-short_eq__t_4 yr_t__gt_May 15_co_ 2014_lt_/time_gt_ by gwenael_lt_/strong_gt_\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-04-08T11:43:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Answer to Wingnut_t_s question _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/3865-what-do-you-want-in-babylonjs/?p_eq_33076_dd__qt__gt_http_dd_//www.html5gamedevs.com/topic/3865-what-do-you-want-in-babylonjs/?p_eq_33076_dd__lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I use for/in loop to loop through the properties of an object (_lt_a href_eq__qt_http_dd_//www.w3schools.com/js/js_loop_for.asp_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.w3schools.com/js/js_loop_for.asp_lt_/a_gt_) and I think using the _t_var_t_ is the proper way to use the loop but I_t_m not a javascript expert. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I also use for/in to loop through items of an array to skip not set items (undefined but not set to undefined...). Here are some experiments that I did a while ago_dd_ _lt_a href_eq__qt_http_dd_//jsfiddle.net/gwenaelhagenmuller/9pJVd/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jsfiddle.net/gwenaelhagenmuller/9pJVd/_lt_/a_gt_. Please read the code and what it_t_s logged in the console. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SideraX","Date":"2014-04-08T12:32:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Just a tiny warning _dd_ for-in-loop is 2 at 10 times much slower than a classic for-loop._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//jsperf.com/for-vs-foreach/75_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jsperf.com/for-vs-foreach/75_lt_/a_gt__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//jsperf.com/for-loop-vs-for-in-loop_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jsperf.com/for-loop-vs-for-in-loop_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-04-08T12:37:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Oh my... Good to know. Need to check that. Thank you._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-04-08T12:39:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks gwenael.  And thank you too_co_ SideraX.  Good to know. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Yeah_co_ I use FOR-IN sometimes_co_ too. I just never use the _t_var_t_ like that.  I was wondering if there had been an ecma recommendation issued that said _qt_thou shalst use a var in for-in_qt_  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I see there is forEach now_co_ too_co_ (in the newer ECMAscript)_co_ but I_t_m hearing rumors that it runs slower than other FOR loops.  It looks like SideraX has done the research.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Since we are in this topic...  I see that tags are active.  Is .userData also going to be installed_co_ or has it?  Did that idea originate with Blender?  Is it a place for the scene builder person to put any text they choose_co_ and of any length?  Do you think we will see/make a method to display .userData_co_ possibly onmouseover the mesh... that pops open a little window like HTML _t_alt_t_ did in the old days?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Seems I remember a longdesc_eq__qt_blah blah_qt_ on html elements_co_ too.  I suppose the programmer could do anything they choose with data in a .userData property... make it a pop-open_co_ use it for notes-to-self_co_ etc.  Ok_co_ i will stop babbling now and watch this discussion move forward on topic.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-04-08T15:32:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I won_t_t add .userData because we are all using javascript and so we can add custom properties whenever we want. tags are important to organize objects but userData is just user data _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"holcombj67","Date":"2014-04-27T14:56:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_A second note about using _qt_for...in_qt_ loops for arrays - it will break if other scripts add stuff to the Array.prototype._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I hit this problem when trying to integrate a page that had both babylon and _lt_a href_eq__qt_http_dd_//kanaka.github.io/noVNC/_qt_ rel_eq__qt_external nofollow_qt__gt_noVNC_lt_/a_gt_.  noVNC had added a couple of functions to the Array_t_s prototype_co_ and babylon tripped over them when iterating over arrays._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_While investigating the problem_co_ I found _lt_a href_eq__qt_http_dd_//stackoverflow.com/questions/500504/why-is-using-for-in-with-array-iteration-such-a-bad-idea_qt_ rel_eq__qt_external nofollow_qt__gt_this Stack Overflow discussion_lt_/a_gt_ that lead me to find the problem.  I am still considering how to best fix it._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-04-28T14:06:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks holcombj67 for sharing this._lt_/p_gt__lt_p_gt_I_t_m not a javascript expert and I_t_m aware that my answer won_t_t solve your problem but I_t_m not sure it_t_s a good practice to surcharge Array_t_s prototype (or the prototype of any other default type). Arrays in javascript can be used as dictionaries would be used in c#_co_ that allows to have _qt_variables_qt_ names with space in them._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var d _eq_ {}_sm_d.key1 _eq_ _qt_value1_qt__sm_d.key2 _eq_ _qt_value2_qt__sm_d.key 3 _eq_ _qt_value3_qt__sm_ // ERRORvar d2 _eq_ []_sm_d2[_qt_key1_qt_] _eq_ _qt_value1_qt__sm_d2[_qt_key2_qt_] _eq_ _qt_value2_qt__sm_d2[_qt_key 3_qt_] _eq_ _qt_value3_qt__sm_//d2.length _eq_ 0 _eq_&gt_sm_ cannot do for(var index_eq_0_sm_ index&lt_sm_d2.length..._lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kolar","Date":"2014-05-06T20:08:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Third note about _qt_for..in_qt_ loops_dd_ lack of _qt_var_qt_ keyword creates variable in global scope (!)_co_ see_dd_ _lt_a href_eq__qt_http_dd_//stackoverflow.com/questions/5717126/var-or-no-var-in-javascripts-for-in-loop_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//stackoverflow.com/questions/5717126/var-or-no-var-in-javascripts-for-in-loop_lt_/a_gt_ . _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-05-06T23:23:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Wow_co_ lots of good information about for-in_co_ well done_co_ all of you. I think I speak on behalf of many of the forum readers.  Very interesting.  Xanmia_co_ we seriously hijacked your thread_co_ but you are becoming a hero just the same.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Xanmia","Date":"2014-05-07T23:53:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hahaha_co_ and I thought this thread was dead..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SideraX","Date":"2014-05-12T12:42:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I will continue to hijak your thread ^^_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_When I need to use associative array in JS_co_ I prefer use this implementation of a Hashmap _dd_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/SideraX/sefjs/blob/master/src/utils/Hashmap.ts_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/SideraX/sefjs/blob/master/src/utils/Hashmap.ts_lt_/a_gt_ (I writed it after some inspiration here and there for my Entity-Component-Systems framework - which I use it to develop my game on top of Babylon)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It will save the data in packed array (hole in array are bad _dd_ _lt_a href_eq__qt_http_dd_//www.smashingmagazine.com/2012/11/05/writing-fast-memory-efficient-javascript/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.smashingmagazine.com/2012/11/05/writing-fast-memory-efficient-javascript/_lt_/a_gt_ ) for an efficient foreach and the key can be a string or an int (it will not impact the perf)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Perf _dd_ for..in vs hasmap.foreach() _dd_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//jsperf.com/hashmap-vs-natif-object_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jsperf.com/hashmap-vs-natif-object_lt_/a_gt__lt_/p_gt__lt_p_gt_Apart for some unholy optimization than V8 seems to do on object with few property (Firefox don_t_t). Hashmap.foreach is way more fast._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Perf _dd_ object[key] vs hasmap.get(key)_lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//jsperf.com/hasmap-vs-natif-object-get_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//jsperf.com/hasmap-vs-natif-object-get_lt_/a_gt__lt_/p_gt__lt_p_gt_Performence are practically the same _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And if you need even faster for_co_ you can do (but you will not have the key in this case) _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var val _eq_ hashmap.values()_sm_for (var i _eq_ 0_co_ len _eq_ val.length_sm_ i &lt_sm_ len_sm_ i++) {  val[i]_sm_}_lt_/pre_gt__lt_p_gt_Some drawback _dd_ Hashmap will take more memory and the delete method is a bit slow (needed to keep arrays packed)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Maybe we can put this class in BABYLON.Tools alongside Smartarray and nobody will have excuse to use for..in again _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jessepmason","Date":"2015-12-18T19:08:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey guys I know this is a really old thread but I am curious if it is yet possible to add mesh data or tags in the Babylon file?_lt_/p_gt__lt_p_gt_I have looked and I don_t_t see an option for tags or mesh data in the babylon file...so probley not but I think it could be really useful if we can set the data or tags through one of the exporters such as 3ds max or just manually by editing the babylon file_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Anyway I know this has been brought up in this thread already but I have just found a need for it so I thought I_t_d bring it up_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]