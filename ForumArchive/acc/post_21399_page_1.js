[{"Owner":"drbanetti","Date":"2016-03-23T16:22:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello and sorry if that_t_s something trivial.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have an application in development that uses BABYLON 2.3 and today (as of right now) I_t_ve noticed on Firefox version 45.0.1 that BABYLON.Engine.isSupported() gave false result. Tested after that on Chrome_co_ Edge_co_ IE 11_co_ works on all of them. Until yesterday it worked also on previous version of Firefox that I had. No changes were made to code from yesterday until this moment.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs that something common or is just my computer. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote_dd_ For the moment_co_ I cannot test this on another computer_co_ just on the one I develop.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you again\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-03-23T16:25:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou should check in options if WebGL or Hardware acceleration are disabled\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"drbanetti","Date":"2016-03-23T16:44:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for the reply_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWebGl is enabled on about_dd_support panel_co_ I see the card and driver version_co_  but I also see some entries there like this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(#0) Error    GLContext is disabled due to a previous crash._lt_br_gt_\n\t(#1) Error    GLContext is disabled due to a previous crash._lt_br_gt_\n\t(#2) Error    GLContext is disabled due to a previous crash._lt_br_gt_\n\t(#3) Error    GLContext is disabled due to a previous crash._lt_br_gt_\n\t(#4) Error    GLContext is disabled due to a previous crash. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIndeed_co_ yesterday after the update to the new version of Firefox_co_ I had a crash on the browser_co_ but I didn_t_t follow it then to see what happened. I_t_ll investigate it now_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you for your time\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-04-10T20:19:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI had a keyboard hang_co_ have had nothing but problems since got a wireless keyboard dropping strokes.  Going to have to try and find a REAL keyboard that has a wire.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ hit reset button_co_ and now Firefox 45.0.1 webgl does not work.  Did you ever get it working?  Firefox nightly works_co_ except it tries to do SIMD and fails.  I could disable SIMD when I morph_co_ and I could be doing a major update to Ubuntu 16.04 LTS.  Might just side-step problem.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-04-11T17:45:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI am back!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust for the future searcher.  There is hidden directory _t_~/.mozilla_t_.  In that directory_co_ there is a _t_firefox_t_ directory.  If you delete that directory_co_ it will be rebuilt_co_ &amp_sm_ webgl works again.  MAKE SURE you backup your bookmarks first!!  You will need to restore them afterward.  Also_co_ if you were using the toolbar for bookmarks_co_ you need to make it visible again.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]