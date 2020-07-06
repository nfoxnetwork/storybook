<template>
  <div class="Card">
    <div
      class="Card__Image"
      :style="{
        backgroundImage: imageUrl ? `url( ${ imageUrl } )` : '',
      }"
    >
    </div>
    <div class="Card__Body">
      <div class="Card__Title">
        {{ title }}
      </div>
      <div class="Card__Summary">
        {{ summary }}
      </div>
      <div class="Card__Rating">
        <svg
          viewBox="0 0 128 128"
          v-for="i in Math.min( rating, 5 )"
          :key="`star-colord-${i}`"
        >
          <path
            d="m93.7 115c-.9 0-1.7-.2-2.5-.6l-27.2-14.3-27.2 14.3c-2.6 1.4-5.8.4-7.2-2.2-.5-1-.7-2.2-.5-3.4l5.2-30.3-22-21.5c-2.1-2.1-2.2-5.4-.1-7.5.8-.8 1.9-1.4 3.1-1.6l30.4-4.4 13.5-27.5c1.6-2.6 5-3.5 7.6-2 .8.5 1.5 1.2 2 2l13.6 27.5 30.4 4.4c2.9.4 4.9 3.1 4.5 6-.2 1.2-.7 2.2-1.6 3.1l-22 21.4 5.2 30.3c.5 2.9-1.5 5.7-4.4 6.2-.2.1-.5.1-.8.1z"
            fill="#f8b84e"
          />
        </svg>
        <svg
          viewBox="0 0 128 128"
          v-for="i in Math.max( 5 - rating, 0 )"
          :key="`star-blank-${i}`"
        >
          <path
            d="m93.7 115c-.9 0-1.7-.2-2.5-.6l-27.2-14.3-27.2 14.3c-2.6 1.4-5.8.4-7.2-2.2-.5-1-.7-2.2-.5-3.4l5.2-30.3-22-21.5c-2.1-2.1-2.2-5.4-.1-7.5.8-.8 1.9-1.4 3.1-1.6l30.4-4.4 13.5-27.5c1.6-2.6 5-3.5 7.6-2 .8.5 1.5 1.2 2 2l13.6 27.5 30.4 4.4c2.9.4 4.9 3.1 4.5 6-.2 1.2-.7 2.2-1.6 3.1l-22 21.4 5.2 30.3c.5 2.9-1.5 5.7-4.4 6.2-.2.1-.5.1-.8.1z"
            fill="#ccc"
          />
        </svg>
        ({{ reviews }})
      </div>
      <button
        class="Card__PinButton"
        type="button"
        @click="$emit( 'pin' )"
      >
        <svg viewBox="0 0 128 128">
          <path
            d="m115.3 31.4-18.7-18.7-37.3 33.3 1.5 21.2 21.2 1.5z"
            fill="#c21b23"
          />
          <path
            d="m119.3 39.3-30.6-30.6c-1.1-1.1-1.1-2.8 0-3.9s2.8-1.1 3.9 0l30.6 30.6c1.1 1.1 1.1 2.8 0 3.9s-2.9 1.1-3.9 0z"
            fill="#ee3840"
          />
          <path
            d="m48.1 73.6-41.3 41.4-2.8 9 9-2.8 41.4-41.3z"
            fill="#ccc4c1"
          />
          <path
            d="m82 68.7-22.7-22.7c-14-5.3-30.4-2.3-41.7 8.9l55.5 55.5c11.2-11.3 14.2-27.7 8.9-41.7z"
            fill="#ee3840"
          />
        </svg>
      </button>
    </div>
    <div class="Card__Footer">
      <button
        class="Card__StarButton"
        type="button"
        @click="$emit( 'star' )"
      >
        <svg viewBox="0 0 128 128">
          <path
            d="m93.7 115c-.9 0-1.7-.2-2.5-.6l-27.2-14.3-27.2 14.3c-2.6 1.4-5.8.4-7.2-2.2-.5-1-.7-2.2-.5-3.4l5.2-30.3-22-21.5c-2.1-2.1-2.2-5.4-.1-7.5.8-.8 1.9-1.4 3.1-1.6l30.4-4.4 13.5-27.5c1.6-2.6 5-3.5 7.6-2 .8.5 1.5 1.2 2 2l13.6 27.5 30.4 4.4c2.9.4 4.9 3.1 4.5 6-.2 1.2-.7 2.2-1.6 3.1l-22 21.4 5.2 30.3c.5 2.9-1.5 5.7-4.4 6.2-.2.1-.5.1-.8.1z"
            fill="#f8b84e"
          />
        </svg>
        {{ stars }}
      </button>
      <button
        class="Card__LikeButton"
        type="button"
        @click="$emit( 'like' )"
      >
        <svg viewBox="0 0 128 128">
          <path
            d="m124 43.7c0-17.3-14.1-31.4-31.4-31.4-12.7 0-23.7 7.6-28.6 18.5-4.9-10.9-15.9-18.5-28.6-18.5-17.3 0-31.4 14.1-31.4 31.4 0 3.7.6 7.2 1.8 10.4 1.3 3.7 3.3 7.1 5.8 10 1.1 1.3 2.2 2.4 3.5 3.5l47.9 47.6c.3.3.7.4 1.1.4s.8-.1 1.1-.4l49.7-49.4c3.2-3.2 5.7-7.1 7.3-11.5 1.1-3.3 1.8-6.8 1.8-10.6z"
            :fill="isLiked ? '#d41536' : 'none'"
            stroke="#d41536"
            stroke-width="8"
          />
        </svg>
        {{ likes }}
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      imageUrl: {
        type: String
      },
      title: {
        type: String
      },
      summary: {
        type: String
      },
      isLiked: {
        type: Boolean,
      },
      stars: {
        type: Number,
      },
      likes: {
        type: Number,
      },
      isLiked: {
        type: Boolean,
      },
      rating: {
        type: Number,
      },
      reviews: {
        type: Number,
      },
    },
    computed: {
    }
  }
</script>

<style scoped>
.Card {
  font-family: sans-serif;
  font-size: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 90%;
  min-height: 150px;
  margin: 20px auto;
  border-radius: 6px;
  box-shadow:
    0 3px 6px rgba( 0, 0, 0, 0.16 ),
    0 3px 6px rgba( 0, 0, 0, 0.23 );
}

  .Card__Image {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 150px;
    flex-shrink: 0;
    background: #ccc 50% 50% / cover;
    border-radius: 6px 0 0 6px;
  }

  .Card__Body {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 30px 10px 10px;
  }

  .Card__Image ~ .Card__Body {
    width: calc( 100% - 150px );
    margin-left: 150px;
  }

    .Card__Title {
      font-weight: bold;
      font-size: 18px;
    }

    .Card__Summary {
      margin-bottom: 4px;
    }

    .Card__PinButton {
      cursor: pointer;
      position: absolute;
      top: 5px;
      right: 5px;
      padding: 5px;
      border: 0;
      background: transparent;
    }

      .Card__PinButton svg {
        display: block;
        width: 20px;
        height: 20px;
      }

    .Card__Rating {
      display: flex;
    }

      .Card__Rating svg {
        display: block;
        width: 16px;
        height: 16px;
      }

  .Card__Footer {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-top: auto;
    padding: 10px;
  }

  .Card__Image ~ .Card__Footer {
    width: calc( 100% - 150px );
    margin-left: 150px;
  }

    .Card__StarButton,
    .Card__LikeButton {
      font-size: 16px;
      line-height: 1;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      max-width: 80px;
      width: 100%;
      height: 24px;
      padding: 0 10px;
      margin-left: 5px;
      border: 1px solid #666;
      border-radius: 3px;
      background: transparent;
    }

      .Card__StarButton svg,
      .Card__LikeButton svg {
        display: block;
        width: 16px;
        height: 16px;
      }
</style>
