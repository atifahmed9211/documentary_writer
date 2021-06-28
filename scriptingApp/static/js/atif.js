function addRowTable(obj)
{
  console.log(obj.tabClick);
  if(obj.tabClick==1)
  {
    obj.rowCount++;
    //by default row
    var add_newrow="<tr id='custom_script_row_"+obj.rowCount+"'><td class='newTD_custom_script' contenteditable>"+obj.rowCount+"</td><td contenteditable>Description:<br/>Picture:<form action='' method='post' enctype='multipart/form-data'> \
      <input type='file' id='script_file' name='scriptFile'><i class='fa fa-pencil-square-o' aria-hidden='true'></i> \
      <br/>video:<input type='file' id='script_file' name='scriptFile'><i class='fa fa-pencil-square-o' aria-hidden='true'></i> \
      <br/>Audio:<input type='file' id='script_file' name='scriptFile'><i class='fa fa-pencil-square-o' aria-hidden='true'></i> \
          </form></td><td contenteditable id='table_"+obj.tableCount+"_lastTD' class='lastTD'></td></tr>";
    $("#"+(obj.focussed_table)).append(add_newrow);
    console.log(obj.focussed_table);
    $(".newTD_custom_script").focus();
    obj.tabClick=0;
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
                                        <td contenteditable='true' class='input'>Description:<br/>Picture:<form action='' method='post' enctype='multipart/form-data'> \
                                          <input type='file' id='script_file' name='scriptFile'><i class='fa fa-pencil-square-o' aria-hidden='true'></i> \
                                          <br/>video:<input type='file' id='script_file' name='scriptFile'><i class='fa fa-pencil-square-o' aria-hidden='true'></i> \
                                          <br/>Audio:<input type='file' id='script_file' name='scriptFile'><i class='fa fa-pencil-square-o' aria-hidden='true'></i> \
                                              </form></td>  \
                                        <td id='table_"+obj.tableCount+"_lastTD' contenteditable='true' class='lastTD'></td>  \
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
