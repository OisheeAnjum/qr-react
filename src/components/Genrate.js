import React from 'react'

export const Genrate = () => {
    return (
<div class="container px-4 px-lg-5">
    <div class="row gx-4 gx-lg-5 align-items-center my-5">
      <div class="col-lg-9">
        <div class="tab">
          <button class="tablinks" onclick="openCity(event, 'URL')" id="defaultOpen"><i class="fa fa-link"></i> URL</button>
          <button class="tablinks" onclick="openCity(event, 'Text')"><i class="fa fa-pencil"></i> Text</button>
          <button class="tablinks" onclick="openCity(event, 'Email')"><i class="fa fa-envelope"></i> Email</button>
          <button class="tablinks" onclick="openCity(event, 'Geo')"><i class="fa fa-globe"></i> Geo</button>
          <button class="tablinks" onclick="openCity(event, 'Number')"><i class="fa fa-mobile"></i> Number</button>
          <button class="tablinks" onclick="openCity(event, 'SMS')"><i class="fa fa-comment"></i> SMS</button>
          <button class="tablinks" onclick="openCity(event, 'Wifi')"><i class="fa fa-wifi"></i> Wifi</button>
          <button class="tablinks" onclick="openCity(event, 'File')"><i class="fa fa-file"></i> File</button>
        </div>

        <div id="URL" class="tabcontent">
          <form action="/action_page.php">
            <div class="row">
                <div class="col-25">
                    <label for="url">URL</label>
                </div>
                <div class="col-75">
                        <input type="text" id="URL" name="URL" placeholder="Your URL.."/>   
                        <input type="submit" value="Generate"/>
                </div>
            </div>
          </form>
        </div>
        <div id="Text" class="tabcontent">
          <form action="/action_page.php">
            
            <div class="row">
              <div class="col-25">
                <label for="Text">Text</label>
              </div>
              <div class="col-75">
                <textarea id="Text" name="Text" placeholder="Enter Your Text" style="height:200px"></textarea>
                <input type="submit" value="Generate"/>
              </div>
            </div>

          </form>
        </div>

        <div id="Email" class="tabcontent">
          <form action="/action_page.php">
            <div class="row">
              <div class="col-25">
                <label for="Email">Email</label>
              </div>
              <div class="col-75">
                <input type="text" id="Email" name="Email" placeholder="Your Email.."/>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="Subject">Subject</label>
              </div>
              <div class="col-75">
                <input type="text" id="Subject" name="Subject" placeholder="Your email subject.."/>
                <input type="submit" value="Generate"/>
              </div>
            </div>
            

        </form>
        </div>
        <div id="Geo" class="tabcontent">
          <form action="/action_page.php">
            <div class="row">
              <div class="col-25">
                <label for="l1">Latitude:</label>
              </div>
              <div class="col-75">
                <input type="text" id="l1" name="Latitude:" placeholder="Your Latitude:.."/>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="l2"> Longitude:</label>
              </div>
              <div class="col-75">
                <input type="text" id="l2" name="l2" placeholder="Your Longitude:.."/>
                <input type="submit" value="Generate"/>
              </div>
            </div>
            

        </form>
        </div>
        <div id="Number" class="tabcontent">
          <form action="/action_page.php">
            <div class="row">
              <div class="col-25">
                <label for="Number">Number</label>
              </div>
              <div class="col-75">
                <input type="text" id="Number" name="Number" placeholder="Your Number.."/>
                <input type="submit" value="Generate"/>
              </div>
            </div>
          
            

        </form>
        </div>
        <div id="SMS" class="tabcontent">
          <form action="/action_page.php">
            <div class="row">
              <div class="col-25">
                <label for="Number">Number</label>
              </div>
              <div class="col-75">
                <input type="text" id="Number" name="Number" placeholder="Your Number.."/>
                <input type="submit" value="Generate"/>
              </div>
            </div>
          
            

        </form>
        </div>
        <div id="Wifi" class="tabcontent">
          <form action="/action_page.php">
            <div class="row">
              <div class="col-25">
                <label for="Network">Network Name</label>
              </div>
              <div class="col-75">
                <input type="text" id="Network" name="Network" placeholder="Network name.."/>
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="pass">Password</label>
              </div>
              <div class="col-75">
                <input type="password" id="pass" name="Password" placeholder="Your Network Password.."/>
                <input type="submit" value="Generate"/>
              </div>
            </div>

            </form>
        </div>
        <div id="File" class="tabcontent">
          <form action="/action_page.php">
            <div class="row">
              <div class="col-25">
                <label for="fname">Choose File:</label>
              </div>
              <div class="col-75">

                <input type="file" id="myfile" name="myfile"/>   
                <input type="submit" value="Generate"/>
          </div>
            </div>

         

            </form>
        </div>
      </div>
      <div class="col-lg-3">
        
      </div>
    </div>
</div>
    )
    
}


