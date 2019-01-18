[{"Owner":"Pryme8","Date":"2018-07-26T17:29:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIs it possible to pass a texture_co_ a dynamic texture_co_ or even better a material to a GUI button?_lt_br /_gt_\n\t_lt_br /_gt_\n\tI know I could convert the texture to an image_co_ but I was hoping to skip a step._lt_br /_gt_\n\t_lt_br /_gt_\n\ttexture.update()_lt_br /_gt_\n\t            _lt_br /_gt_\n\t            /*-- Create Image --*/_lt_br /_gt_\n\t            var canvas _eq_ document.createElement(_t_canvas_t_)_lt_br /_gt_\n\t            canvas.width _eq_ size.x_co_ canvas.height _eq_ size.y_lt_br /_gt_\n\t            _lt_br /_gt_\n\t            var tCtx _eq_ canvas.getContext(_t_2d_t_)_lt_br /_gt_\n\t            var iDat _eq_ ctx.getImageData(0_co_0_co_size.x_co_ size.y)_lt_br /_gt_\n\t        _lt_br /_gt_\n\t            tCtx.putImageData(iDat_co_ 0_co_0)_lt_br /_gt_\n\t            _lt_br /_gt_\n\t            var image _eq_ new Image()_lt_br /_gt_\n\t            image.id _eq_ _qt_GUI-Image_qt__lt_br /_gt_\n\t            image.src _eq_ canvas.toDataURL()_lt_br /_gt_\n\t            _lt_br /_gt_\n\t            texture.rawImage _eq_ image_sm__lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_br /_gt_\n\tIs what I am doing right now._lt_br /_gt_\n\t_lt_br /_gt_\n\tIdeally I would want to be able to assign a rtt_co_ to a Image on a button on the GUI.  With the intent of raymarching some GUI elements but using the GUI_t_s structure to organize and deal with mouse interaction. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-27T16:31:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGUI is canvas based so there is no webgl involved. So no material or texture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo you need to read pixels (texture.readPixels) and use that to draw in your canvas. Should not be a problem if you don_t_t that too much as it involves GPU-&gt_sm_CPU memory transfer\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-07-27T17:36:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tthanks what I was kinda thinking!_lt_br /_gt_\n\tThank you.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]