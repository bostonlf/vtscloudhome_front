<template>
  <!-- footer start -->
  <footer role="contentinfo" aria-label="IBM">
    <div id="ibm-footer" class="ibm-alternate">
      <div class="ibm-columns ibm-padding-bottom-0">
        <div class="ibm-col-1-1">
          <div class="ibm-footer-corporate-links ibm-word-break-all">
            <ul class="ibm-padding-bottom-0 ibm-textcolumns-small-2">
              <li>
                <a href="https://www.ibm.com/contact/us/en/?lnk=flg-cont-usen">Contact</a>
              </li>
              <li>
                <a href="http://www.ibm.com/privacy/us/en/?lnk=flg-priv-usen">Privacy</a>
              </li>
              <li>
                <a href="http://www.ibm.com/legal/us/en/?lnk=flg-tous-usen">
                  Terms
                  of use
                </a>
              </li>
              <li>
                <a href="http://www.ibm.com/accessibility/us/en/?lnk=flg-acce-usen">Accessibility</a>
              </li>
              <li class="ibm-feedbacklink">
                <a href="https://www.ibm.com/standards/web/v18/a-z-index/#">Feedback</a>
              </li>
              <li id="ibm-truste-cp">
                <a
                  href="https://www.ibm.com/standards/web/v18/a-z-index/#"
                  onclick="truste.eu.clickListener();return false;"
                >
                  Cookie
                  preferences
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- footer end -->
</template>

    <script>
        export default {
        name: "VTSfooter",
        props:['loginmsg']
    }
</script>