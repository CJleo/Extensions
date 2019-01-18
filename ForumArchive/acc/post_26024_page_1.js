[{"Owner":"fenX","Date":"2016-10-26T13:27:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there a simple way to create instances of a mesh with its children (and grandchildren) meshes ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a tree made of a hierarchy of custom meshes _dd_ treeGround (juste a square ground for texture like tree roots_co_ dirt and grass)_co_ a trunk wich has treeGround as parent_co_ a branch wich has trunk as parent_co_ and other branches wich are instances of the first branch and also have trunk as parent (and are moved and rotated around the trunk).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen i try to create instance of treeGround i get only the ground_co_ not the tree_co_ same if i try to instanciate the trunk i dont get the branches.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo is there a way to create an instance of the whole hierarchy ? Would cloning instead of instancing be better ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-10-28T04:50:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/25708-createinstance-not-cloning-children/?do_eq_embed_qt__gt__lt_/iframe_gt_\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2016-10-28T07:14:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis can help hopefully _dd_ \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ public createInstanceAsset(name_dd_string_co_ newname?_dd_string) _dd_ BABYLON.AbstractMesh {\n        var model _dd_ BABYLON.Mesh _eq_ this.assets[name]_sm_\n        var childrens _eq_ model.getDescendants()_sm_\n        if (!newname) {\n            newname _eq_ name+_t__instance_t__sm_\n        }\n        var mesh _eq_ model.createInstance(newname)_sm_\n \n        for (let c of childrens) {\n            var child _eq_ &lt_sm_BABYLON.Mesh&gt_sm_ c_sm_\n            var inst _eq_ child.createInstance(_t__t_)_sm_\n            inst.parent _eq_ mesh_sm_\n        }\n        return mesh_sm_\n    }_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenX","Date":"2016-10-28T15:18:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks Temechon_co_ that_t_s the idea_co_ I just wanted to know i there a was already a buld-in Mesh method or a parameter of createInstance to do this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt might be better to use getChildren instead of getDescendants and make a recursive call to the function to keep the same hirearchy and pass the mesh as parameter instead of the name.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow i_t_m trying to make this work but in my case I get an empty array when I do tree.getChildren() or tree.getDescendants()_co_ no idea why _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2016-10-29T20:03:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24148-fenx/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24148_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24148-fenx/_qt_ rel_eq__qt__qt__gt_@fenX_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s a playground scene I found which helped me both in instancing and cloning children. It doesn_t_t matter that the example is cloning children in a skeleton hierarchy - just modify the code as needed. However_co_ I highly recommend that you export a .babylon file from Blender in which the parent child relationship is already set up ( check the hierarchy in Blender)_co_ then using clone instead of instance will automatically import both parent and children without any additional code. This saves me LOADS of time.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2016-10-29T21:20:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/?do_eq_hovercard_qt_ data-mentionid_eq__qt_11286_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/11286-dbawel/_qt_ rel_eq__qt__qt__gt_@dbawel_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2016-10-29T21_dd_22_dd_21Z_t_ title_eq__t_10/29/2016 09_dd_22  PM_t_ data-short_eq__t_2 yr_t__gt_October 29_co_ 2016_lt_/time_gt_ by JohnK_lt_/strong_gt_\n\t\n\t\t_lt_br_gt_missing pg\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]