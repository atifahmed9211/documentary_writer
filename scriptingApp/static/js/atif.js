function addRowTable(obj)
{
  console.log(obj.tabClick);
  if(obj.tabClick==1)
  {
    obj.rowCount++;
    //by default row
    var add_newrow="<tr id='custom_script_row'><td class='newTD_custom_script' contenteditable>"+obj.rowCount+"</td><td contenteditable></td><td contenteditable id='table_"+obj.tableCount+"lastTD' class='lastTD'></td></tr>";
    $("#"+(obj.focussed_table)).append(add_newrow);
    console.log(obj.focussed_table);
    $(".newTD").focus();
    obj.tabClick=0;
    //if user changes row type
    script_value=$("#script_type_value option:selected").val();
    console.log(script_value);
    first_phase_VO=true;
    first_phase_SOT=true;
    first_phase_BLACK=true;
    first_phase_OPENING_TITLES=true;
    first_phase_CREDITS=true;
    $("#script_type_value").on('change',function(){
      script_value=$("#script_type_value option:selected").val();
      console.log(script_value);
      if(script_value=="VO")
      {
        if(first_phase_VO)
        {
          $("#custom_script_row").hide();
          var add_newrow="<tr id='VO_script_row'><td class='newTD_vo' contenteditable>"+obj.rowCount+"</td><td contenteditable></td><td contenteditable id='table_"+obj.tableCount+"lastTD'  class='lastTD'>VO</td></tr>";
          $("#script-table").append(add_newrow);
          $(".newTD_vo").focus();
          obj.tabClick=0;
          first_phase_VO=false;
        }
        else
        {
          $("#custom_script_row").hide();
          $("#VO_script_row").show();
          $("#SOT_script_row").hide();
          $("#BLACK_script_row").hide();
          $("#TITLES_script_row").hide();
          $("#CREDITS_script_row").hide();
        }
      }
      else if(script_value=="SOT")
      {
        if(first_phase_SOT)
        {
          $("#custom_script_row").hide();
          $("#VO_script_row").hide();
          var add_newrow="<tr id='SOT_script_row'><td class='newTD_sot' contenteditable>"+obj.rowCount+"</td><td contenteditable></td><td contenteditable id='table_"+obj.tableCount+"lastTD'>SOT</td></tr>";
          $("#script-table").append(add_newrow);
          $(".newTD_sot").focus();
          obj.tabClick=0;
          first_phase_SOT=false;
        }
        else
        {
          $("#custom_script_row").hide();
          $("#VO_script_row").hide();
          $("#SOT_script_row").show();
          $("#BLACK_script_row").hide();
          $("#TITLES_script_row").hide();
          $("#CREDITS_script_row").hide();
        }
      }
      else if(script_value=="BLACK")
      {
        if(first_phase_BLACK)
        {
          $("#custom_script_row").hide();
          $("#VO_script_row").hide();
          $("#SOT_script_row").hide();
          var add_newrow="<tr id='BLACK_script_row'><td class='newTD_black' contenteditable>"+obj.rowCount+"</td><td contenteditable></td><td contenteditable id='table_"+obj.tableCount+"lastTD'>BLACK</td></tr>";
          $("#script-table").append(add_newrow);
          $(".newTD_black").focus();
          obj.tabClick=0;
          first_phase_BLACK=false;
        }
        else
        {
          $("#custom_script_row").hide();
          $("#VO_script_row").hide();
          $("#SOT_script_row").hide();
          $("#BLACK_script_row").show();
          $("#TITLES_script_row").hide();
          $("#CREDITS_script_row").hide();
        }
      }
      else if(script_value=="OPENING TITLES")
      {
        if(first_phase_OPENING_TITLES)
        {
          $("#custom_script_row").hide();
          $("#VO_script_row").hide();
          $("#SOT_script_row").hide();
          $("#BLACK_script_row").hide();
          var add_newrow="<tr id='TITLES_script_row'><td class='newTD_titles' contenteditable>"+obj.rowCount+"</td><td contenteditable></td><td contenteditable id='table_"+obj.tableCount+"lastTD'>OPENING TITLES</td></tr>";
          $("#script-table").append(add_newrow);
          $(".newTD_titles").focus();
          obj.tabClick=0;
          first_phase_OPENING_TITLES=false;
        }
        else
        {
          $("#custom_script_row").hide();
          $("#VO_script_row").hide();
          $("#SOT_script_row").hide();
          $("#BLACK_script_row").hide();
          $("#TITLES_script_row").show();
          $("#CREDITS_script_row").hide();
        }
      }
      else if(script_value=="CREDITS")
      {
        if(first_phase_CREDITS)
        {
          $("#custom_script_row").hide();
          $("#VO_script_row").hide();
          $("#SOT_script_row").hide();
          $("#BLACK_script_row").hide();
          $("#TITLES_script_row").hide();
          var add_newrow="<tr id='CREDITS_script_row'><td class='newTD_credits' contenteditable>"+obj.rowCount+"</td><td contenteditable></td><td contenteditable id='table_"+obj.tableCount+"lastTD'>CREDITS</td></tr>";
          $("#script-table").append(add_newrow);
          $(".newTD_credits").focus();
          obj.tabClick=0;
          first_phase_CREDITS=false;
        }
        else
        {
          $("#custom_script_row").hide();
          $("#VO_script_row").hide();
          $("#SOT_script_row").hide();
          $("#BLACK_script_row").hide();
          $("#TITLES_script_row").hide();
          $("#CREDITS_script_row").show();
        }
      }
      else
      {
        $("#VO_script_row").hide();
        $("#SOT_script_row").hide();
        $("#BLACK_script_row").hide();
        $("#TITLES_script_row").hide();
        $("#CREDITS_script_row").hide();
        $("#custom_script_row").show();
        $(".newTD").blur();
        $(".newTD_custom_script").focus();
        obj.tabClick=0;
      }
    });
    }
  else if(obj.tabClick==2)
  {
      obj.tableCount++;
      var add_newtable="<br/><br/><h4 style='color:white; font-weight: bolder;' id='actNo'>Act <span contenteditable>"+obj.tableCount+"</span></h4> \
                                  <table id='table_"+obj.tableCount+"' width='100%'> \
                                    <thead> \
                                      <tr>  \
                                        <th>NO.</th>  \
                                        <th>MEDIA</th> \
                                        <th>SCRIPT</th> \
                                      </tr>             \
                                    </thead>            \
                                    <tbody id='script-table'> \
                                      <tr>  \
                                        <td contenteditable='true' class='newTD'>1</td>  \
                                        <td contenteditable='true' class='input'></td>  \
                                        <td contenteditable='true' class='lastTD'></td>  \
                                      </tr> \
                                    </tbody>  \
                                  </table>";
                                  $("#table-div").append(add_newtable);
                                  obj.tabClick=0;
                                  obj.rowCount=1;
                                  $('*').blur();
                                  $(".newTD").focus();
                                  obj.focussed_table="table_"+obj.tableCount;
  }
}
