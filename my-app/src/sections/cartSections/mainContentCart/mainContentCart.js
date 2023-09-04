import { useEffect } from 'react';
import './mainContentCart.scss';
import defaultCover from './src/default-cover.jpg';
import defaultRec1 from './src/rec1.jpg';
import defaultRec2 from './src/rec2.jpg';
import defaultRec3 from './src/rec3.jpg';
import { Link } from "react-router-dom";

function MainContentCart() {
  var defaultQuantity = 1;

  useEffect(() => {
    if (document.readyStatec == 'loading') {
      document.addEventListener('DOMContentLoaded', ready)
    } else {
      ready()
    }

    function ready() {
      function removeFunction() {
        var removeCartItemButtons = document.getElementsByClassName('btn-danger')
        for (var i = 0; i < removeCartItemButtons.length; i++) {
          var button = removeCartItemButtons[i]
          const handleRemove = (event) => {
            var buttonClicked = event.target
            buttonClicked.closest('.item-container').remove()
            updateCartTotal();
          }
          button.addEventListener(
            'click',
            handleRemove
          );
        }
      }
      removeFunction()
  
      function quantityChange() {
        var quantityInputs = document.getElementsByClassName('cart-quantity-input')
        for (var i = 0; i < quantityInputs.length; i++) {
          var input = quantityInputs[i]
          const handleQuantityChange = (event) => {
            var input = event.target
            if (isNaN(input.value) || input.value <= 0) {
              input.value = 1
            }
            updateCartTotal()
          }
          input.addEventListener(
            'change',
            handleQuantityChange
          );
        }
      }
      quantityChange()

      var addToCartButtons = document.getElementsByClassName('add-to-cart')
      for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        const handleAddToCart = (event) => {
          var button = event.target
          var shopItem = button.parentElement.parentElement
          var platformType = shopItem.getElementsByClassName('type')[0].innerText
          var title = shopItem.getElementsByClassName('name')[0].innerText
          var price = shopItem.getElementsByClassName('price')[0].innerText
          var imgSrc = shopItem.getElementsByClassName('shop-item-img')[0].src
          console.log(platformType, title, price, imgSrc)
          addItemToCart(platformType, title, price, imgSrc)

          function addItemToCart(platformType, title, price, imgSrc) {
            var itemContainer = document.createElement('div')
            itemContainer.classList.add('item-container')
            var cartItems = document.getElementsByClassName('cart-items')[0]
            var cartItemsNames = document.getElementsByClassName('title-cart-item')
            for (var i = 0 ; i < cartItemsNames.length; i++) {
              if (cartItemsNames[i].innerText == title) {
                alert("Product is already in cart, changes its quntinity if you want more that one copy :^)")
                return
              }
            }
            var itemContainerContents = `
                <a href='#' alt='game-cover' class='cover'>
                  <picture>
                    <img src=${imgSrc} alt='default-cover'></img>
                  </picture>
                </a>

                <div class='information'>
                  <div class='name'>
                    <div class='platform platform-pc'>
                      <div class='icon-s icon-pc'></div>
                    </div>
                    <span class='title-cart-item'>${title}</span>
                  </div>
                  <div class='type'>${platformType}</div>
                    <div class='delete btn-danger'>
                      <div class='icon'>
                        <div class='icon-delete icon-xxs'></div>
                      </div>
                      <span>Remove</span>
                    </div>
                  </div>

                  <div class='price-container'>
                    <div class='hidden-official-price'>266.28zł</div>
                    <div class='hidden-discount'>-87.62zł</div>
                    <div class='price'>${price}</div>
                    <input class="cart-quantity-input" type="number" value="1"></input>
                  </div>
                `
            itemContainer.innerHTML= itemContainerContents
            cartItems.append(itemContainer)
            itemContainer.getElementsByClassName('btn-danger')[0].addEventListener(
              'click',
              removeFunction()
            )
            itemContainer.getElementsByClassName('cart-quantity-input')[0].addEventListener(
              'change',
              quantityChange()
            )
            updateCartTotal()
          }
        }
        button.addEventListener(
          'click',
          handleAddToCart
        )
      }

      const handlePucharseClicked = () => {
        alert('Building pucharse option still in progess. S-sorry..')
      }
      document.getElementsByClassName('btn-pucharse')[0].addEventListener(
        'click',
        handlePucharseClicked
      )
    }
  }, []);

  function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('item-container')
    var totalOfficialPrice = 0;
    var totalDiscount = 0;
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i]
      var priceElement = cartRow.getElementsByClassName('price')[0]
      var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
      var quantity = quantityElement.value

      var officialPriceElement = cartRow.getElementsByClassName('hidden-official-price')[0]
      var officialPrice = parseFloat(officialPriceElement.innerText.replace('zł', ''))
      totalOfficialPrice = totalOfficialPrice + (officialPrice * quantity);

      var discountElement = cartRow.getElementsByClassName('hidden-discount')[0]
      var discountPrice = parseFloat(discountElement.innerText.replace('zł', ''))
      totalDiscount = totalDiscount + (discountPrice * quantity);

      var price = parseFloat(priceElement.innerText.replace('zł', ''))
      total = total + (price * quantity)
    }
    totalOfficialPrice = Math.round(totalOfficialPrice * 100) / 100
    document.getElementsByClassName('cart-totalOffical-price')[0].innerText = totalOfficialPrice + 'zł'

    totalDiscount = Math.round(totalDiscount * 100) / 100
    document.getElementsByClassName('cart-totalDiscount-price')[0].innerText = totalDiscount + 'zł'

    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = total + 'zł'
  }
  
  return (
    <section className='cart-section-wrapper'>
      <div className='section-wrapper'>
        <div className='cart-container'>
          <div className='cart-left'>
            <div className='cart-container-section'>
              <h2>Cart</h2>
              <div className='cart-listing'>
                <div className='cart-items'>
                  <div className='item-container'>
                    <a href='#' alt='game-cover' className='cover'>
                      <picture>
                        <img src={defaultCover} alt='default-cover'></img>
                      </picture>
                    </a>

                    <div className='information'>
                      <div className='name'>
                        <div className='platform platform-pc'>
                          <div className='icon-s icon-pc'></div>
                        </div>
                        <span className='title-cart-item'>Random Game</span>
                      </div>
                      <div className='type'>Steam</div>
                      <div className='delete btn-danger'>
                        <div className='icon'>
                          <div className='icon-delete icon-xxs'></div>
                        </div>
                        <span>Remove</span>
                      </div>
                    </div>

                    <div className='price-container'>
                      <div className='hidden-official-price'>266.28zł</div>
                      <div className='hidden-discount'>-87.62zł</div>
                      <div className='price'>178.66zł</div>
                      <input className="cart-quantity-input" type="number" defaultValue={defaultQuantity}></input>
                    </div>
                  </div>
                  <div className='item-container'>
                    <a href='#' alt='game-cover' className='cover'>
                      <picture>
                        <img src={defaultCover} alt='default-cover'></img>
                      </picture>
                    </a>

                    <div className='information'>
                      <div className='name'>
                        <div className='platform platform-pc'>
                          <div className='icon-s icon-pc'></div>
                        </div>
                        <span className='title-cart-item'>Random Game2</span>
                      </div>
                      <div className='type'>Steam</div>
                      <div className='delete btn-danger'>
                        <div className='icon'>
                          <div className='icon-delete icon-xxs'></div>
                        </div>
                        <span>Remove</span>
                      </div>
                    </div>

                    <div className='price-container'>
                      <div className='hidden-official-price'>266.28zł</div>
                      <div className='hidden-discount'>-87.62zł</div>
                      <div className='price'>378.66zł</div>
                      <input className="cart-quantity-input" type="number" defaultValue={defaultQuantity}></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='seperator'></div>

            <div className='cart-container-section wishlist'>
              <h2>Recommended</h2>
              
              <div className='cartpage-listing'>
                <div className='item-listing'>
                  <a href='#' alt='cover' className='cover'>
                    <picture>
                      <img className='shop-item-img' src={defaultRec1} alt='rec1'></img>
                    </picture>
                  </a>

                  <div className='information'>
                    <div className='name'>
                      <div className='platform platform-pc'>
                        <div className='icon-s icon-pc'></div>
                      </div>
                      Recommended 1
                    </div>
                    <div className='type'> Steam </div>
                    <div className='price'> 87.92zł </div>
                  </div>

                  <a href='#' alt='move to cart' className='add-to-cart'>
                    <span>Move to cart</span>
                    <div className='icon-arrow2 icon-xxs'></div>
                  </a>
                </div>
                <div className='item-listing'>
                  <a href='#' alt='cover' className='cover'>
                    <picture>
                      <img className='shop-item-img' src={defaultRec2} alt='rec2'></img>
                    </picture>
                  </a>

                  <div className='information'>
                    <div className='name'>
                      <div className='platform platform-pc'>
                        <div className='icon-s icon-pc'></div>
                      </div>
                      Recommended 2
                    </div>
                    <div className='type'> Steam </div>
                    <div className='price'> 90.92zł </div>
                  </div>

                  <a href='#' alt='move to cart' className='add-to-cart'>
                    <span>Move to cart</span>
                    <div className='icon-arrow2 icon-xxs'></div>
                  </a>
                </div>
                <div className='item-listing'>
                  <a href='#' alt='cover' className='cover'>
                    <picture>
                      <img className='shop-item-img' src={defaultRec3} alt='rec3'></img>
                    </picture>
                  </a>

                  <div className='information'>
                    <div className='name'>
                      <div className='platform platform-pc'>
                        <div className='icon-s icon-pc'></div>
                      </div>
                      Recommended 3
                    </div>
                    <div className='type'> Steam </div>
                    <div className='price'> 99.92zł </div>
                  </div>

                  <a href='#' alt='move to cart' className='add-to-cart'>
                    <span>Move to cart</span>
                    <div className='icon-arrow2 icon-xxs'></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='cart-right'>
            <div className='cart-summary-wrapper'>
              <h2>Summary</h2>
              <div className='cart-summary'>
                <div className='summary-row'>
                  <span>Offical price:</span>
                  <span className='cart-totalOffical-price'>266.28zł</span>
                </div>
                <div className='summary-row'>
                  <span>Discount:</span>
                  <span className='cart-totalDiscount-price'>-87.62zł</span>
                </div>
                <div className='summary-row'>
                  <span>Subtotal:</span>
                  <span className='cart-total-price'>178.66zł</span>
                </div>

                <a href='#' alt='button' className='button gotopayment btn-pucharse'>
                  Go to payment 
                  <div className='icon-arrow icon-xxs'></div>
                </a>

                <span className='choice'> or </span>

                <Link to='/Boostrank' href='#' alt='back' className='back'>
                  <span>
                  <div className='icon-arrow icon-xxs'></div>
                  Continue shopping
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='seperator-wide'></div>
      </div>
    </section>
  );
}

export default MainContentCart;