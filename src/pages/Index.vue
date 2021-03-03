<template>
  <div class="page">
    <div class="home">
      <q-card color="green" class="card">
        <q-card-section class="text-center">
          <div class="container-input">
            <div style="display: flex;"> 
              <q-input 
                borderless
                hide-underline
                v-model.lazy="value.input"
                v-money="money"
                type="text"
                color="grey"
                input-class="text-black" 
                label="Você envia"
                class="input">
              </q-input>

              <q-btn-dropdown class="container__btn" :icon="btnOne.icon" :label="btnOne.name">
                <q-list>
                  <q-item clickable v-close-popup @click="setCurrentButton(icon.BRL.url, icon.BRL.name, btnOne)"> 
                    <q-item-section>
                      <q-item-label class="container__item_label">
                        <q-avatar square>
                          <img :src="icon.BRL.url" :style="icon.length">
                        </q-avatar>
                        <span class="text-weight-bold text-black">BRL</span> - Real Brasileiro
                      </q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="setCurrentButton(icon.EUR.url, icon.EUR.name, btnOne)">
                    <q-item-section>
                      <q-item-label class="container__item_label">
                        <q-avatar square>
                          <img :src="icon.EUR.url" :style="icon.length">
                        </q-avatar>
                        <span class="text-weight-bold text-black">EUR</span> - Euro
                      </q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="setCurrentButton(icon.USD.url, icon.USD.name, btnOne)">
                    <q-item-section>
                      <q-item-label class="container__item_label">
                        <q-avatar square>
                          <img :src="icon.USD.url" :style="icon.length">
                        </q-avatar>
                        <span class="text-weight-bold text-black">USD</span> - Dólar Americano
                      </q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="setCurrentButton(icon.BTC.url, icon.BTC.name, btnOne)">
                    <q-item-section>
                      <q-item-label class="container__item_label">
                        <q-avatar square>
                          <img :src="icon.BTC.url" :style="icon.length">
                        </q-avatar>
                        <span class="text-weight-bold text-black">BTC</span> - Bitcoin
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>

            <div class="container">
              <q-timeline color="blue-grey-10">
                <q-timeline-entry class="container__text" 
                  :subtitle=" btnOne.name + ' = ' + btnTwo.name + ' ' + floatToRealString(fxRate)"/>
                
                <q-timeline-entry class="container__text" 
                  :subtitle="'IOF(1,10%) = ' + btnOne.name  + ' ' + floatToRealString(rate.iof_value)"/>
                  
                <q-timeline-entry class="container__text" 
                  :subtitle="'Taxa administrativa = ' + btnOne.name  + ' ' + floatToRealString(rate.fx_value)"/>
              </q-timeline>
            </div>

            <div style="display: flex;">
              <q-input 
                borderless
                hide-underline
                v-model="value.output"
                disable
                type="text"
                input-class="text-black"
                color="grey" 
                label="Beneficiário recebe"
                class="input">
              </q-input>

              <q-btn-dropdown class="container__btn" :icon="btnTwo.icon" :label="btnTwo.name">
                <q-list>
                  <q-item clickable v-close-popup @click="setCurrentButton(icon.BRL.url, icon.BRL.name, btnTwo)"> 
                    <q-item-section>
                      <q-item-label class="container__item_label">
                        <q-avatar square>
                          <img :src="icon.BRL.url" :style="icon.length">
                        </q-avatar>
                        <span class="text-weight-bold text-black">BRL</span> - Real Brasileiro
                      </q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="setCurrentButton(icon.EUR.url, icon.EUR.name, btnTwo)">
                    <q-item-section>
                      <q-item-label class="container__item_label">
                        <q-avatar square>
                          <img :src="icon.EUR.url" :style="icon.length">
                        </q-avatar>
                        <span class="text-weight-bold text-black">EUR</span> - Euro
                      </q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="setCurrentButton(icon.USD.url, icon.USD.name, btnTwo)">
                    <q-item-section>
                      <q-item-label class="container__item_label">
                        <q-avatar square>
                          <img :src="icon.USD.url" :style="icon.length">
                        </q-avatar>
                        <span class="text-weight-bold text-black">USD</span> - Dólar Americano
                      </q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="setCurrentButton(icon.BTC.url, icon.BTC.name, btnTwo)">
                    <q-item-section>
                      <q-item-label class="container__item_label">
                        <q-avatar square>
                          <img :src="icon.BTC.url" :style="icon.length">
                        </q-avatar>
                        <span class="text-weight-bold text-black">BTC</span> - Bitcoin
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </div>
          </div>
          <div class="msg">{{ message }}</div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { floatToRealString } from '../assets/js/functions/utils'
import { VMoney } from 'v-money'
import { http } from 'boot/axios'

export default {
  name: 'PageIndex',
  data(){
    return {
      value: {
        input: '',
        output: ''
      },
      money: {
        decimal: ',',
        thousands: '.',
        precision: 2,
        masked: false
      },
      message: '',
      btnOne: {
        id: 1,
        name: '',
        icon: ''
      },
      btnTwo: {
        id: 2,
        name: '',
        icon: ''
      },
      icon: {
        BRL: {
          name: 'BRL',
          url: 'https://www.countryflags.io/br/flat/64.png'
        },
        EUR: {
          name: 'EUR',
          url: 'https://www.countryflags.io/eu/flat/64.png'
        },
        USD: {
          name: 'USD',
          url: 'https://www.countryflags.io/us/flat/64.png'
        },
        BTC: {
          name: 'BTC',
          url: 'https://uploaddeimagens.com.br/images/003/108/836/full/bitcoin.png?1614730070'
        },
        length: 'width: 40px; height: 40px;'
      },
      fxRate: '',
      rate: {
        iof_value: 1.1,
        fx_value: 1.0
      }
    }
  },

  directives: { money: VMoney },

  async mounted(){
    this.init()
  },

  watch: {
    'fxRate': function () {
      this.converted()
    },
    'value.input': function () {
      this.converted()
    }
  },

  methods: {
    floatToRealString,
    init(){
      this.btnOne.icon = 'img:' + this.icon.USD.url;
      this.btnOne.name = this.icon.USD.name;

      this.btnTwo.icon = 'img:' + this.icon.BRL.url;
      this.btnTwo.name = this.icon.BRL.name;

      this.updateCurrency()
    },

    getCurrent(){
      return this.btnOne.name + "-" + this.btnTwo.name
    },

    converted(){
      let valueInput = parseFloat(this.value.input.replace('.', '').replace(',', '.')).toFixed(2)
      
      const converted_value = (valueInput * this.fxRate - 
                              (valueInput * this.rate.iof_value / 100) - 
                              (valueInput * this.rate.fx_value / 100)); 
                            
      this.value.output = floatToRealString(converted_value)
    },

    setCurrentButton(icon, name, newObj){
      if (newObj.id == this.btnOne.id && name === this.btnTwo.name ) {
          this.btnTwo.icon = this.btnOne.icon;
          this.btnTwo.name = this.btnOne.name;

          this.btnOne.icon = 'img:' + icon 
          this.btnOne.name = name
      } else if (newObj.id == this.btnTwo.id && this.btnTwo.name === name) {
          this.btnOne.icon = this.btnOne.icon;
          this.btnOne.name = this.btnOne.name;

          this.btnTwo.icon = 'img:' + icon;
          this.btnTwo.name = name;
      } else {
        newObj.icon = 'img:' + icon
        newObj.name = name
      }

      this.updateCurrency()
    },

    updateCurrency(){
      this.message = ''
      let params = this.getCurrent()
      const result = http.get('https://economia.awesomeapi.com.br/' + params)
      .then(r => {
        this.fxRate = r.data[0].ask;
        localStorage.setItem(params, this.fxRate);
      })
      .catch(e => {
        this.fxRate = localStorage.getItem(params)
        console.log(e)
        this.value.output = '0,00';
        this.message = "Não foi possível estabelecer uma conexão, usaremos as ultimas taxas de conversão salva."
      })

      return result
    }
  }
  
}
</script>

<style lang="scss" scoped>
  .home {
    padding-top: 40px;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .card {
    padding: 10px 10px 10px 10px;
    background-color: #f8f8ff;
  }

  .container {
    padding: 0px 0px 0px 02%; 
    text-align: left;

    &__text {
      font-weight: bold;
      color: black;   
    }

    &__btn {
      font-size: 18px;
      width: 180px;
      color: white;
      background-color: #26343e;
    }

    &__item_label {
      color: grey;
    }

  }

  .input {
    padding-left: 2%;
    width: 500px;
    height: 70px;
    font-size: 22px;
    border: 1px solid;
    box-shadow: 3px 8px 8px #cccccc52;
    background-color: white;
  }

  .msg {
    padding: 10px;
    text-align: center;
    font-size: 12px;
    color: #B22222;
  }

</style>