[{"Owner":"inteja","Date":"2017-12-10T08:07:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI_t_ve seen the decal demo and also 1 or 2 threads related to dynamic textures. I am wanting more realistic damage than I think a simple decal can provide so am wanting to use (I think) dynamic textures to alter the diffuse_co_ normal and specular maps to achieve a scratched and dented look. Just wondering if there_t_s any examples of this?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-12-11T15:26:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya inteja... good to see you again.  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#I4VGK%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#I4VGK#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s all broken_co_ due to stale URL_t_s... but... there_t_s a little bit of everything going-on there.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA possibility for you... would be to _qt_hack_qt_ a small portion of the context2d image buffer... with a special patch of damage-texture (perhaps one of MANY damage texture-patches).  (subTextures?)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_   Anyway_co_ that PG might be useful.  I found it with _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/playground?code_eq_context2d_qt_ rel_eq__qt_external nofollow_qt__gt_a PG-search for context2d_lt_/a_gt_.  Context2d is the heart of dynamicTextures_co_ as you likely know.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tRemember that dynamicTexture.update() is IMPERATIVE.  I always forgot that.  I think DK had to remind me 3 different times... about that.  I_t_m going brain dead.  Writing _qt_subTextures_qt_ might be covered _lt_strong_gt__lt_a href_eq__qt_https_dd_//www.w3.org/TR/2dcontext/#drawing-images-to-the-canvas_qt_ rel_eq__qt_external nofollow_qt__gt_HERE_lt_/a_gt__lt_/strong_gt_.  There also seems to be _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1UCP5L%235_qt_ rel_eq__qt_external nofollow_qt__gt_some utility functions in THIS PG_lt_/a_gt_.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SvenFrankson","Date":"2017-12-11T16:53:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#PGRNB3%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#PGRNB3#_lt_/a_gt_3\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s an exemple using Dynamic textures to display red dots on the mesh uppon clicking.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(on diffuse texture only_co_ but it can work the same on normal and specular)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMain issue in this example _dd_ Each face share the same UV area_co_ so the red dot appears on every face (it happens often _dd_ If you have tileable textures on your walls for example...)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you have full control on your UV unwrapping_co_ you can go with this method_co_ otherwise it can be tough. Are you sure it_t_s worth it over the Decal method ? It_t_s flat texture in any case_co_ so if you want to display some large hole in the wall (like a huge shell impact)_co_ you_t_ll be limited by the amount of 3Dness you can get from Normal and Occlusion Maps_co_ which is limited _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"inteja","Date":"2017-12-12T04:12:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ and _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25742-svenfrankson/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25742_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25742-svenfrankson/_qt_ rel_eq__qt__qt__gt_@SvenFrankson_lt_/a_gt_ That_t_s what I was looking for. Will try adding in normal to approximate dents and scratches. For more major damage I_t_m planning on using exploded geometry.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-12-12T11:00:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOoh_co_ that_t_s a nice_co_ clean demo_co_ SvenF... thx!  Good words/info_co_ too.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tInteja... you might want to keep particleSytems in mind_co_ too.  A started PS with no emitRate_co_ and a .manualEmitCount _eq_ 0... sits and idles_co_ doing nothing.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen a shot hits a surface_co_ quickly set ps.emitter to vector3 position of impact_co_ and then set ._lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#206JUO%233_qt_ rel_eq__qt_external nofollow_qt__gt_manualEmitCount_lt_/a_gt_ to... perhaps... 300.   A 300-particle _qt_poof_qt_ will happen_co_ and then the PS goes back to idle.  Remember that .emit_lt_strong_gt_Power_lt_/strong_gt_ will still be active/honored_co_ even when using .manualEmitCount instead-of .emitRate.  (that is_co_ unless you over-ride the servicing-of emitPower... via using a custom PS startPoz/update function.  More about that in a moment.)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThat might be handy.  Solid Particle System (SPS) can do the same thing_co_ and you can add your own _qt_junk_qt_ as particles... often... little pieces of ribbons and whatever other strange (parametric) shapes you can assemble.  In essence_co_ you can make a debris generator.  Also remember that more than one particle system can run at the same time_co_ so consider using one or more idling SPS (for chunks) and one or more idling standard PS (for dust_co_ smoke_co_ fire_co_ little-chips_co_ etc).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ both types of particle systems allow a _qt_customStartPosition_qt_ and _qt_customUpdate_qt_ function.  Update is the function that makes the particles fly_co_ spin_co_ change colors_co_ check age_co_ etc.  So you could disable most of the update func in ONE of your SPS systems.  Once that is done_co_ wherever the startPosition func places the particles_co_ they stay there (until their age/lifeTime expires).  SO_co_ you could put chunks of SPS particles AROUND the impact point.  Material _qt_shred_qt_.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  That would add some 3D-ness to your impacts... without any need for boolean hole-drilling into the impacted mesh.  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy goofy but world-famous _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#MYY6S%2311_qt_ rel_eq__qt_external nofollow_qt__gt_sphere-o-particles_lt_/a_gt_ is an example of custom StartPos and Update funcs.  You can also _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1NXKLI%237_qt_ rel_eq__qt_external nofollow_qt__gt_swap-out emitters quickly in the render loop_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOne other _qt_trick_qt__co_ if wanted_co_ is to STILL put a decal or dot texture_co_ like Sven showed us_co_ but then set godrays (Volumetric Light Scattering) on that little dot.  It makes it _qt_appear_qt_ that a light beam is shining thru the bullet hole... from behind.  It works... ok.  I don_t_t think I have a working demo of that anymore_co_ sorry.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSmoke_co_ fire_co_ chips_co_ chunks_co_ ripping_co_ a guy could become a professional impact engineer/mad scientist_co_ if wanted.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI and others would like to see every version you make_co_ if/when possible.  Few have taken projectile impacts to _qt_the extreme_qt__co_ and I think it is a valuable feature and skill.  Anyone who has ever played Serious Sam... knows the enjoyment of machine-gunning the trees.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope this helps (overload your imagination).  cya later.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BitOfGold","Date":"2017-12-12T16:19:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI experimented a little with dynamic height map (alpha channel of normal map_co_ .useParallaxOcclusion and .useParallax on material)_co_ I just can_t_t find the code anymore_co_ probably deleted it..._lt_br /_gt_\n\tMaybe I try to re-do it as it looked very good._lt_br /_gt_\n\tIt was for snow/fotsteps not scratches._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]