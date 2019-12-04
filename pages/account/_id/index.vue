<template>
  <div class="my-12 block font-sans">
    <div>
      <div class="mt-16 mb-6">
        <div class="flex flex-row justify-center items-center">
          <div class="headline font-bold flex-auto w-11/12 text-center">
            Account
          </div>
          <div class="logout-area flex-1 hover:underline pr-4">
            <a href="">Logout</a>
          </div>
        </div>
      </div>
      <div ref="account-alert" class="text-center flex justify-center">
        <div class="alert info">
          <div class="symbol">
            <i>
              <img src="@/assets/svg/report.svg" alt="report_svg"/>
            </i>
          </div>
          <div class="content">
            <strong class="my-1 block">Verify your email address</strong>
            <p class="block">
              To help keep your account secure, please verify your email address. Send a verification email to
              “example@email.com” or update your email address.
            </p>
            <button class="btn alert-btn">
              Send verification email
            </button>
          </div>
        </div>
      </div>
    </div>
    <!--Membership section-->
    <div class="my-10">
      <div class="headline mb-6">
        Membership
      </div>
      <div class="px-2">
        <!--Account section-->
        <section class="flex"><!--Left side-->
          <div class="w-1/3">
            <p class="sub-headline">Account</p>
            <div class="form">
              <div class="form-control-group">
                <label for="acct-firstname">First name</label>
                <input type="text" class="form-control" name="acct-firstname" id="acct-firstname"/>
              </div>
              <div class="form-control-group">
                <label for="acct-lastname">Last name</label>
                <input type="text" class="form-control" name="acct-firstname" id="acct-lastname"/>
              </div>
            </div>
          </div>
          <!--Right side-->
          <div class="w-full p-4 ">
            <div class="flex justify-end">
              <nuxt-link :to="{name: 'account-id-terminate'}" class="btn special">Cancel membership</nuxt-link>
            </div>
            <div class="flex w-full justify-end mt-16">
              <div class="w-2/3">
                <div class="visa-notice w-full">
                  <p class="w-full flex-auto mx-6">
                    Visa ending in 1234 - 9/2023
                  </p>
                  <div class="flex items-center ">
                    <div class="badge primary mr-4">Primary</div>
                    <span class="text-3xl mx-4">&times;</span>
                  </div>
                </div>
                <div class="my-2 flex items-end justify-between w-full">
                  <div>
                    <strong class="block">
                      Membership expires: July 24, 2019 (7/24/19)
                    </strong>
                    <strong class="block">
                      Account will renew: July 25, 2019 (7/25/19)
                    </strong>
                  </div>
                  <div>
                    <p>Change Payment option</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!--Email section-->
        <section class="flex justify-end items-baseline mb-3">
          example@email.com
          <button class="btn text-blue-700">Change E-mail</button>
        </section>
        <hr>
        <!--Password section-->
        <section class="my-8 block">
          <p class="sub-headline">Password</p>
          <!--Left side-->
          <div class="w-2/4 px-2">
            <div class="form">
              <div class="form-control-group">
                <label for="acct-password-old">Old Password</label>
                <input type="text" class="form-control" name="acct-password-old" id="acct-password-old"/>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="w-full flex justify-around ">
              <div class="flex-1 px-2">
                <div class="form-control-group">
                  <label for="acct-password-new">New Password</label>
                  <input type="text" class="form-control" name="acct-password-new" id="acct-password-new"/>
                </div>
              </div>
              <div class="flex-1 px-2">
                <div class="form">
                  <div class="form-control-group">
                    <label for="acct-password-retype">Re-type Password</label>
                    <input type="text" class="form-control" name="acct-password-retype" id="acct-password-retype"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr>
        <!--Address section-->
        <section>
          <p class="sub-headline">Address</p>
          <div class="w-2/4 px-2">
            <div class="form">
              <div class="block">
                <div class="block w-full">
                  <div class="w-full flex justify-around ">
                    <div class="flex-1 px-2">
                      <div class="form-control-group">
                        <label for="acct-address">Address</label>
                        <input type="text" class="form-control" name="acct-address" id="acct-address"/>
                      </div>
                    </div>
                    <div class="flex-grow px-2">
                      <div class="form">
                        <div class="form-control-group">
                          <label for="acct-city">City</label>
                          <input type="text" class="form-control" name="acct-city" id="acct-city"/>
                        </div>
                      </div>
                    </div>
                    <div class="flex-1 px-2">
                      <div class="form">
                        <div class="form-control-group">
                          <label for="acct-state">State/Province</label>
                          <input type="text" class="form-control" name="acct-state" id="acct-state"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="block w-full">
                  <div class="w-full flex justify-around ">
                    <div class="flex-1 px-2">
                      <div class="form">
                        <div class="form-control-group">
                          <label for="acct-zipcode">Zip code</label>
                          <input type="text" class="form-control" name="acct-zipcode" id="acct-zipcode"/>
                        </div>
                      </div>
                    </div>
                    <div class="flex-1 px-2">
                      <div class="form">
                        <div class="form-control-group">
                          <label for="acct-country">Country</label>
                          <select class="form-control" name="acct-country" id="acct-country">
                            <option value=""></option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!--Submit-->
        <section>
          <div class="flex justify-end">
            <button class="btn danger">Save</button>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dashboard'
  }
</script>

<style scoped>
  .visa-notice {
    padding: 7px;
    background: #F2F2F2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4px auto 15px;
  }
</style>
