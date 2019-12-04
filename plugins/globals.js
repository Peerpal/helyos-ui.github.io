import Vue from 'vue'
import Logo from '../components/Logo'
import NavTopBar from '../components/NavTopBar'
import NavSideBar from '../components/NavSideBar'
import NavbarSearch from '../components/NavbarSearch'
import Navbar from '../components/Navbar'
import BannerSlider from '../components/BannerSlider'
import ProductListing from '../components/ProductListing'
import UserLikesListing from '../components/UserLikesListing'
import UserOrderListing from '../components/UserOrderListing'
import NewsLetterSignup from '../components/NewsletterSignup'
import Footer from '../components/Footer'
import Preloader from '../components/Preloader'
import ProductLikeCard from '../components/ProductLikeCard'
import ProductShowCard from '../components/ProductShowCard'
import ProductGrid from '../components/ProductGrid'
import RelatedProduct from '../components/RelatedProduct'
import SingleProduct from '../components/SingleProduct'
import PaymentButton from '../components/PaymentButton'
import SingleProductSideBar from '../components/SingleProductSidebar'
import SingleProductSizeChooserButton from '../components/SingleProductSizeChooserButton'
import SingleProductSizeChooserGrid from '../components/SingleProductSizeChooserGrid'
import SingleProductSizeChooserPopup from '../components/SingleProductSizeChooserPopup'
import SingleProductPricePicker from '../components/SingleProductPricePicker'
import SingleProductNebulaPay from '../components/SingleProductNebulaPay'
import CheckoutWizard from '../components/CheckoutWizard'
import CheckoutCustomerInfo from '../components/CheckoutCustomerInfo'
import CheckoutPaymentSelection from '../components/CheckoutPaymentSelection'
import CheckoutShippingInfo from '../components/CheckoutShippingInfo'
import CheckoutThankYou from '../components/CheckoutThankYou'
import ShoppingBagInfo from '../components/ShoppingBagInfo'
import PlanChooser from '../components/PlanChooser'
import ComingSoon from '../components/ComingSoon'
import InstaSearch from '../components/InstaSearch'
import ContactForm from '../components/ContactForm'
import HeyloPlans from '../components/HeyloPlans'
import WaitLoader from '../components/WaitLoader'

import TipPopup from '../components/TipPopup'
import HeyloProductOwnItem from '../components/HeyloProductOwnItem'
import HeyloForm from '../components/heylo-form'
import HeyloPopup from '../components/HeyloPopup'
import HeyloModal from '../components/HeyloModal'
import VueFormWizard from '../components/vue-form-wizard'
import VueTelInput from 'vue-tel-input'

Vue.use(VueTelInput)
Vue.use(VueFormWizard)
Vue.use(HeyloForm)



/*Personal Components*/
Vue.component('logo', Logo)
Vue.component('navbar-top', NavTopBar)
Vue.component('navbar-side', NavSideBar)
Vue.component('navbar-search', NavbarSearch)
Vue.component('navbar', Navbar)
Vue.component('banner-slider', BannerSlider)
Vue.component('product-listing', ProductListing)
Vue.component('tip-popup', TipPopup)
Vue.component('heylo-popup', HeyloPopup)
Vue.component('heylo-modal', HeyloModal)
Vue.component('heylo-form', HeyloForm)
Vue.component('heylo-plans', HeyloPlans)
Vue.component('product-like-card', ProductLikeCard)
Vue.component('product-show-card', ProductShowCard)
Vue.component('product-grid', ProductGrid)
Vue.component('related-product', RelatedProduct)
Vue.component('payment-button', PaymentButton)
Vue.component('insta-search', InstaSearch)
Vue.component('contact-form', ContactForm)

Vue.component('user-likes-listing', UserLikesListing)
Vue.component('user-order-listing', UserOrderListing)
Vue.component('newsletter-signup', NewsLetterSignup)
Vue.component('footer-section', Footer)
Vue.component('preloader', Preloader)

Vue.component('coming-soon', ComingSoon)
Vue.component('plan-chooser', PlanChooser)
Vue.component('single-product-nebula-pay', SingleProductNebulaPay)
Vue.component('single-product-price-picker', SingleProductPricePicker)
Vue.component('single-product-size-chooser-button', SingleProductSizeChooserButton)
Vue.component('single-product-size-chooser-grid', SingleProductSizeChooserGrid)
Vue.component('single-product-size-chooser-popup', SingleProductSizeChooserPopup)
Vue.component('single-product', SingleProduct)
Vue.component('single-product-sidebar', SingleProductSideBar)
Vue.component('product-ownership', HeyloProductOwnItem)
Vue.component('wait-loader', WaitLoader)

/*Checkout Components*/
Vue.component('checkout-wizard', CheckoutWizard)
Vue.component('customer-info', CheckoutCustomerInfo)
Vue.component('payment-selection', CheckoutPaymentSelection)
Vue.component('shipping-info', CheckoutShippingInfo)
Vue.component('shopping-bag-info', ShoppingBagInfo)
Vue.component('thank-you', CheckoutThankYou)


/*External components*/
import VueTailwind from 'vue-tailwind'
import MyOwnTheme from '~/assets/MyOwnTheme'
import { Tabs, Tab } from 'vue-tabs-component'
import VueIconFont from 'vue-icon-font'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

Vue.component('tabs', Tabs)
Vue.component('tab', Tab)
Vue.use(VueTailwind, {
  theme: MyOwnTheme
})
Vue.use(VueIconFont)
// require styles
// import 'swiper/dist/css/swiper.css'

// Vue.use(VueAwesomeSwiper, /* { default global options } */)


/*
const components = {TopNavbar, Logo}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})*/
