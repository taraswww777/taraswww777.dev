<?php
/**
 * Front to the WordPress application. This file doesn't do anything, but loads
 * wp-blog-header.php which does and tells WordPress to load the theme.
 *
 * @package WordPress
 */

/**
 * Tells WordPress to load the WordPress theme and output it.
 *
 * @var bool
 */
define('WP_USE_THEMES', true);
require_once __DIR__ . '/wp-load.php';
get_header();
?>
<div class="Home_container__3sao-">
  <main class="Home_main__1Z1aG">
    <div class="Home_title__28pEg">
      <div class="title_titleContainer__3H_lF"><h1 class="title_title__ooZgs">Сайт Тараса</h1>
        <h2 class="title_subTitle__16AL8">
          Через какоето время на этом месте будет жить полноценный сайт. Покачто сайт в стадии активной разработки
        </h2></div>
    </div>
    <div class="Home_accordion__1OAUn">
      <div class="collapsable-block_block__2K7Je">
        <div class="collapsable-block_block__title__2R4EK"><h2 class="title_subTitle__16AL8">Accordion</h2>
        </div>
        <div class="collapsable-block_block__content__2pIR1"></div>
      </div>
    </div>
    <div class="Home_toggle__Jr58L">
      <div class="collapsable-block_block__2K7Je">
        <div class="collapsable-block_block__title__2R4EK"><h2 class="title_subTitle__16AL8">Toggle</h2>
        </div>
        <div class="collapsable-block_block__content__2pIR1"></div>
      </div>
    </div>
    <div class="Home_buttons__3Kkk-">
      <ol>
        <li>
          <button
              title="mini"
              class="buttons_btn__173Py  buttons_btn--size_mimi__2nedT buttons_btn--type_danger__Afp9f"
          >123
          </button>
          <button
              title="mini"
              class="buttons_btn__173Py  buttons_btn--size_mimi__2nedT buttons_btn--type_danger__Afp9f"
          >mini
          </button>
        </li>
        <li><a
              href="#"
              title="mini"
              class="buttons_btn__173Py buttons_btn__link__2z5Fj buttons_btn--size_mimi__2nedT"
          >123 link</a><a
              href="#"
              title="mini link"
              class="buttons_btn__173Py buttons_btn__link__2z5Fj buttons_btn--size_medium__3YBDF"
          >mini link</a></li>
        <li>
          <button
              title="small"
              class="buttons_btn__173Py  buttons_btn--size_small__pkeeh buttons_btn--type_danger__Afp9f"
          >small
          </button>
          <button
              title="small"
              class="buttons_btn__173Py  buttons_btn--size_small__pkeeh buttons_btn--type_danger__Afp9f"
          >small
          </button>
        </li>
        <li>
          <button
              title="medium info"
              class="buttons_btn__173Py  buttons_btn--size_medium__3YBDF buttons_btn--type_info__QgRmR"
          >medium info
          </button>
          <button
              title="medium"
              class="buttons_btn__173Py  buttons_btn--size_medium__3YBDF buttons_btn--type_danger__Afp9f"
          >medium
          </button>
        </li>
        <li>
          <button
              title="large"
              class="buttons_btn__173Py  buttons_btn--size_large__2YmhR buttons_btn--type_danger__Afp9f"
          >large
          </button>
          <button
              title="large"
              class="buttons_btn__173Py  buttons_btn--size_large__2YmhR buttons_btn--type_danger__Afp9f"
          >large
          </button>
        </li>
      </ol>
    </div>
    <div class="Home_alerts__2pyKn">
      <div class="alerts_alert__1lNBf alerts_alert--warning__1ur0R false">
        <button class="alerts_alert__close__3Mifv">×</button>
        <div class="alerts_alert__title__dcpTD">qwe</div>
        <div class="alerts_alert__content__3Nd1a">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Praesentium, quisquam.
        </div>
      </div>
      <div class="alerts_alert__1lNBf alerts_alert--warning__1ur0R false">
        <button class="alerts_alert__close__3Mifv">×</button>
        <div class="alerts_alert__content__3Nd1a">1Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Praesentium, quisquam.
        </div>
      </div>
    </div>
    <div class="Home_tabs__22qee">
      <div class="tabs_tabs__1knny">
        <div class="tabs_tabs__categories__2-PAF">
          <div class="tabs_tabs__category__3paSW ">
            <button
                title="1true"
                class="buttons_btn__173Py buttons_btn--active__37aEl buttons_btn--size_medium__3YBDF buttons_btn--type_danger__Afp9f"
            >1true
            </button>
          </div>
          <div class="tabs_tabs__category__3paSW false">
            <button
                title="2false"
                class="buttons_btn__173Py false buttons_btn--size_medium__3YBDF buttons_btn--type_danger__Afp9f"
            >2false
            </button>
          </div>
          <div class="tabs_tabs__category__3paSW false">
            <button
                title="3false"
                class="buttons_btn__173Py false buttons_btn--size_medium__3YBDF buttons_btn--type_danger__Afp9f"
            >3false
            </button>
          </div>
        </div>
        <div class="tabs_tabs__content__2VkMf">1Lorem ipsum dolor sit.1Lorem ipsum dolor sit.1Lorem ipsum
          dolor sit.1Lorem ipsum dolor sit.1Lorem ipsum dolor sit.1Lorem ipsum dolor sit.1Lorem ipsum
          dolor sit.1Lorem ipsum dolor sit.
        </div>
      </div>
    </div>
    <div class="Home_socialLinks__2V_kn"><a
          href="123"
          class="social-link_socialLink__2CGfx social-link_socialLink--view_brick__UoBtT"
      ><span class="icon_social-500px__1-usO icon_icon__1um2d"></span></a><a
          href="qwe"
          class="social-link_socialLink__2CGfx social-link_socialLink--view_simple__2pwKf"
      ><span class="icon_social-500px__1-usO icon_icon__1um2d"></span></a></div>
    <div class="Home_blockquote__1wAVP">
      <div>
        <div class="blockquote_blockquote__title__3XWEM">Lorem ipsum dolor.</div>
        <blockquote class="blockquote_blockquote__wrapper__Svy5n">
          <div class="blockquote_blockquote__content__2a-7F">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi autem culpa distinctio
            doloremque
            eligendi esse ex, excepturi exercitationem, fugiat inventore ipsum iusto laudantium non
            officia possimus
            reprehenderit sapiente voluptates.
          </div>
          <div class="blockquote_blockquote__author__155ta">Lorem ipsum.</div>
        </blockquote>
      </div>
    </div>
    <div class="Home_tooltip__1FDLB">
      <div>
        <div class="tooltip_tooltip__title__2cLvI">Lorem ipsum dolor.</div>
        <div class="tooltip_tooltip__content__2mjac">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi autem culpa distinctio
          doloremque
          eligendi esse ex, excepturi exercitationem, fugiat inventore ipsum iusto laudantium non officia
          possimus
          reprehenderit sapiente voluptates.
        </div>
      </div>
    </div>
    <div class="Home_informationBlock__39rPu">
      <div>
        <div class="information-block_informationBlock__title__gHk_S">Lorem ipsum dolor.</div>
        <div class="information-block_informationBlock__content__25e74">
          <div class="information-block_informationBlock__subTitle__2bQvE">
            <span class=" text_markedText--type_danger__1nUt9">subTitle</span> Lorem ipsum dolor.
          </div>
          <div class="information-block_informationBlock__left__37JpD">
            <div class="information-block_informationBlock__text__396n2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi autem culpa
              distinctio doloremque
              eligendi esse ex, excepturi exercitationem, fugiat inventore ipsum iusto laudantium non
              officia possimus
              reprehenderit sapiente voluptates.
            </div>
          </div>
          <div class="information-block_informationBlock__right__26ZDZ">
            <button
                title="btnLabel"
                class="buttons_btn__173Py  buttons_btn--size_large__2YmhR buttons_btn--type_danger__Afp9f"
            >btnLabel
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer class="Home_footer__2v49s">taraswww777</footer>
</div>
<?php get_footer(); ?>
