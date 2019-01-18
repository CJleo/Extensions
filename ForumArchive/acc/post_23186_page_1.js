[{"Owner":"dbawel","Date":"2016-06-15T03:14:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello Babylonians_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have had my GearVR for a while now using both the Samsung S6 and S7_co_ and from the very beginning_co_ the phone overheats within 15 - 20 minutes - making performance practically unusable. As a developer_co_ this is a big problem_co_ as my QA suffers due to the heavy load I need to place on the device for thorough testing. Although as a user_co_ there is little fun in having to shut down every 15 minutes when this is just the time the action in most games becomes most intense_co_ and the experience totally suffers at this point.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I began looking for solutions for this huge problem_co_ and was able to discover a few _qt_tricks_qt_ which I now have almost completely solved the overheating issue. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI should start from the beginning_co_ as the path to my final solution also might possibly help other developers and users in understanding the GearVR hardware much better in this regard. Firstly_co_ this is not in anyway good for the device to get so hot that it overheats to the point of the CPU performance being so dramatically diminished_co_ that the screen stutters and I begin to see HUGE artifacts in the render_co_ as well as hugely poor sensor and generally all hardware performance. And to actually see this progressing rapidly from 30 fps and downward from there is a bit frightening_sm_ as I doubt the hardware will have a very long life under these conditions.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo the first step I recommend is to install a CPU performance app (personally recommend _qt_Performance Monitor Mini Pro_qt_ for any Android device. I recommend this app as it has TONS of features_co_ and I_t_m able to customize the onscreen display and enable it at anytime to display a very small footprint of essential hardware performance properties. I prefer to display Memory Usage_co_ CPU (and config) usage by percentage_co_ Device temperature_co_ and CPU performance averaging all available CPUs (the S6 and S7 are 8 processors averaging between 1200MHz and 1500MHz for most applications. These assist in devloping on any Android device for any application or game in addition to the invaluable use in VR development - due to the heavy resources required for speed and display performance. Once I installed this_co_ I saw an average of 105 degrees F with the phone idle rise to 145+ degrees F in just a couple of minutes - depending on the game and other resources utilized during gameplay. So this got my attention very quickly.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI won_t_t go into the lengthy process of how I got to the rest of my personal optimization solutions_co_ but regardless of the device you_t_re using for development or even only as a gamer_co_ I highly recommend the following (parts of this copied from other sites so I didn_t_t have to re-type)_dd_\n_lt_/p_gt_\n\n_lt_ul style_eq__qt_margin_dd_.357143em 0px 0px_sm_padding_dd_0px 0px 0px 40px_sm_list-style_dd_disc_sm_color_dd_rgb(34_co_34_co_34)_sm_font-family_dd_verdana_co_ arial_co_ helvetica_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt__lt_li style_eq__qt_margin_dd_0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\t\t_lt_p style_eq__qt_margin_dd_.357143em 0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\t\t\tAvoid charging during GearVR use_co_ unless essential - and never use the quick charger that comes with the phones while plugged into the GearVR_co_ as this heats up your phone much faster than a _qt_standard_qt_ charger\n\t\t_lt_/p_gt_\n\t_lt_/li_gt_\n\t_lt_li style_eq__qt_margin_dd_0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\t\t_lt_p style_eq__qt_margin_dd_.357143em 0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\t\t\tdo not attach the rear cover for the GearVR unless you are outdoors - or have a Sun in your livingroom\n\t\t_lt_/p_gt_\n\t_lt_/li_gt_\n\t_lt_li style_eq__qt_margin_dd_0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\t\t_lt_p style_eq__qt_margin_dd_.357143em 0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\t\t\tclose all other apps\n\t\t_lt_/p_gt_\n\t_lt_/li_gt_\n\t_lt_li style_eq__qt_margin_dd_0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\t\t_lt_p style_eq__qt_margin_dd_.357143em 0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\t\t\tKeep Wi-Fi off_co_ or enable it if the game needs it\n\t\t_lt_/p_gt_\n\t_lt_/li_gt_\n\t_lt_li style_eq__qt_margin_dd_0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\t\t_lt_p style_eq__qt_margin_dd_.357143em 0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\t\t\tturn Bluetooth on if you have a controller\n\t\t_lt_/p_gt_\n\t_lt_/li_gt_\n\t_lt_li style_eq__qt_margin_dd_0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\t\t_lt_p style_eq__qt_margin_dd_.357143em 0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\t\t\tset Android Display_co_ Screen Mode to Basic\n\t\t_lt_/p_gt_\n\t_lt_/li_gt_\n\t_lt_li style_eq__qt_margin_dd_0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\t\t_lt_p style_eq__qt_margin_dd_.357143em 0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\t\t\tturn on Do Not Disturb in Gear VR\n\t\t_lt_/p_gt_\n\t_lt_/li_gt_\n\t_lt_li style_eq__qt_margin_dd_0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\t\t_lt_p style_eq__qt_margin_dd_.357143em 0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\t\t\tset Gear VR brightness to the minimum comfortable setting (3 to 5 range on S6 or S7)\n\t\t_lt_/p_gt_\n\t_lt_/li_gt_\n\t_lt_li style_eq__qt_margin_dd_0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\t\t_lt_p style_eq__qt_margin_dd_.357143em 0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\t\t\tturn Power Saving mode on only if the above isn_t_t sufficient enough\n\t\t_lt_/p_gt_\n\t_lt_/li_gt_\n\t_lt_li style_eq__qt_margin_dd_0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\t\t_lt_p style_eq__qt_margin_dd_.357143em 0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\t\t\tturn of GPS\n\t\t_lt_/p_gt_\n\t_lt_/li_gt_\n\t_lt_li style_eq__qt_margin_dd_0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\t\t_lt_p style_eq__qt_margin_dd_.357143em 0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\t\t\tdisable sync\n\t\t_lt_/p_gt_\n\t_lt_/li_gt_\n\t_lt_li style_eq__qt_margin_dd_0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\t\t_lt_p style_eq__qt_margin_dd_.357143em 0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\t\t\tclear storage cache\n\t\t_lt_/p_gt_\n\t_lt_/li_gt_\n_lt_/ul_gt__lt_p style_eq__qt_margin_dd_.357143em 0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\t \n_lt_/p_gt_\n\n_lt_p style_eq__qt_margin_dd_.357143em 0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\tUsing the GearVR with all of these changes together might be a bit overkill (and generally is_co_) however if you are developing using the GearVR_co_ then I recommend all of the above steps to at least test hardware performance prior to releasing any game or graphic app to the public as an initial baseline benchmark. And I do this prior to the _qt_secret_qt_ and best solution which I reveal below - since most any user other than you will probably not have figured out the next trick which solves the overheating problem - and overheating on all headsets is such a big problem that you should always test hardware performance under most conditions.\n_lt_/p_gt_\n\n_lt_p style_eq__qt_margin_dd_.357143em 0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\t \n_lt_/p_gt_\n\n_lt_p style_eq__qt_margin_dd_.357143em 0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\tAnd now for the single solution that will solve most any overheating issue and allow you to use your GearVR (as well as Cardboard_co_ Vive_co_ etc.) as long as you wish without worry._lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ I highly recommend for anyone developing or using any of these repurposed devices - and this _qt_secret_qt_ is to purchase any 3X5 Cold Gel Pack and attach it to the back of the phone after plugging the device into your GearVR or other headset. DO NOT use any adhesive or any other method to attach the Gel Pack to the phone_co_ as this will defeat the solution by a large degree. Simply plug in your phone_co_ and with the phone facing up place the Gel Pack on top and secure in place with your back cover.\n_lt_/p_gt_\n\n_lt_p style_eq__qt_margin_dd_.357143em 0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\t \n_lt_/p_gt_\n\n_lt_p style_eq__qt_margin_dd_.357143em 0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\tThant_t_s it! It solves any overheating issue_co_ and I have played for over an hour at a time (although this will cause eye damage_co_ headaches and vertigo anyway)_co_ so this is more than enough time before a break is needed. And if you are hard core enough or simply trying to beat that ONE hellish level before you give up_co_ the Gel Packs are generally sold in packages of 5_co_ which do the math - your battery will not last this long_co_ and I don_t_t personally recommend anything over an hour as there are real health issues to consider.\n_lt_/p_gt_\n\n_lt_p style_eq__qt_margin_dd_.357143em 0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\t \n_lt_/p_gt_\n\n_lt_p style_eq__qt_margin_dd_.357143em 0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\tSo_co_ I hope this helps_co_ as if you aren_t_t already experiencing this_co_ you will find the overheating issue one of the biggest pains in the butt_co_ as well as horribly bad for your hardware - and I personally don_t_t want to replace my devices before their time_co_ as well as running into serious performance problems that may appear as bugs in your scene. And I and others can tell you that once your device begins to overheat_co_ performance is impacted to the point of the user experience turning very poor very fast.\n_lt_/p_gt_\n\n_lt_p style_eq__qt_margin_dd_.357143em 0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\t \n_lt_/p_gt_\n\n_lt_p style_eq__qt_margin_dd_.357143em 0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\tCheers_co_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_margin_dd_.357143em 0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\t \n_lt_/p_gt_\n\n_lt_p style_eq__qt_margin_dd_.357143em 0px_sm_padding_dd_0px_sm_font-size_dd_1em_sm_line-height_dd_1.42857em_sm__qt__gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-06-15T03:16:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThank you very much!!!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2016-06-16T02:54:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf you are using any smartphone in GearVR_co_ Google Cardboard_co_ Vive_co_ etc. I recommend using 3 X 5 gel packs at room temperature to reduce the extreme overheating which happens on practically every VR device of this nature_co_ and usually within 15 - 20 minutes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo FYI - I purchased the following gel packs from Amazon - best price and they fit and work really well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.amazon.com/gp/product/B00ZVI485Y/ref_eq_oh_aui_detailpage_o00_s00?ie_eq_UTF8&amp_sm_psc_eq_1_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.amazon.com/gp/product/B00ZVI485Y/ref_eq_oh_aui_detailpage_o00_s00?ie_eq_UTF8&amp_sm_psc_eq_1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf anyone has any further quaestions_co_ just let me know and I will answer what I can since I_t_ve had the opportunity to work for a few months developing on the GearVR_co_ and many years experience in VR and AR including work with Lockheed Martin Virtual Labs over 4 years ago.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2016-06-17T00:32:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAre there any tutorials on how to setup for the Samsung VR? What camera to use. How to get this to work in inside the Samsung environment. By the way I have to  Note 5 and it_co_ so far_co_ has not overheated. In fact I started with a S6 it did overheat. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2016-06-17T00:44:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThere are no tuturials as far as I_t_m aware. but if you use the VRDeviceOrientationFreeCamera_co_ you will be able to render for the GearVR with ease. Below is a good example_co_ and I wish I could remember the author to give them credit.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd you can use the chrome browser or any other and use fullscreen if you don_t_t want to use the Oculus app - see the post below_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/22201-how-to-get-fullscreen-for-3d-rig/?do_eq_embed_qt__gt__lt_/iframe_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr if you want to display any babylon.js scene inside the Oculus app_co_ then the Samsung browser is required - but make certain that WebVR is enabled.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt_FYI - the Note5 takes much longer to overheat as it has the same CPUs as the S6 in a larger enclosure - with slightly less resolution on the display (ppi)_co_ but will still overheat on occasion. Regardless_co_ I would monitor your device temperature_co_ as you_t_ll find it does rise dramatically when using the Ocuus apps_co_ but just below the margin of 145F degrees where the S6 and S7 begin to show noticable overheating and performance drop._lt_/em_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Clarky","Date":"2017-01-20T14:01:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tManaged to solve this by simply purchasing a USB charger 2 port usb output....One port to power fans &amp_sm_ the other to charge the phone.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLook at this on eBay _lt_a href_eq__qt_http_dd_//www.ebay.co.uk/itm/401239462680_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.ebay.co.uk/itm/401239462680_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCoolreall Power Bank 15600mAh 2 Port USB Compact Portable Charger Ultra High Capacity External Rechargeable Battery Power Pack with Quick Charge and LED Flashlight for Most smartphones and tablets&amp_sm_#xFF08_sm_Black&amp_sm_#xFF09_sm_ _lt_a href_eq__qt_https_dd_//www.amazon.co.uk/dp/B016Y0FO2I/ref_eq_cm_sw_r_apa_WCHGybGCQNQKG_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.amazon.co.uk/dp/B016Y0FO2I/ref_eq_cm_sw_r_apa_WCHGybGCQNQKG_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoesn_t_t fit perfectly but does the job and much  cheaper than alternative.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/IMG-20170120-WA0000.jpg.2d1348aaaaf67bf72828bd379289ed51.jpg_qt_ data-fileid_eq__qt_11309_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_IMG-20170120-WA0000.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_11309_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/IMG-20170120-WA0000.thumb.jpg.6f205c9fbdd5de72178183f1558a6044.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/IMG-20170120-WA0002.jpg.2790f6380125cc1d3e4fba021cda6c80.jpg_qt_ data-fileid_eq__qt_11310_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_IMG-20170120-WA0002.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_11310_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_01/IMG-20170120-WA0002.thumb.jpg.2b5b9df690fe51b41679d83892046c4c.jpg_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]