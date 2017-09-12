<template>
  <div class="test">
  <md-card md-with-hover style="height:200px;margin-bottom:30px;">
    <md-tabs md-centered>
  <md-tab md-label="Movies" md-icon="ondemand_video">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
  </md-tab>

  <md-tab md-label="Music" md-icon="music_note">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
  </md-tab>

  <md-tab md-label="Books" md-icon="books">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
  </md-tab>

  <md-tab md-label="Pictures" md-icon="photo">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
  </md-tab>
</md-tabs>
  </md-card>
  <md-card md-with-hover>
  <md-card-header>
    <md-card-header-text>
      <div id="header" class="md-title" v-once>{{title}}</div>
      <div class="md-subhead">By Grandline</div>
    </md-card-header-text>

    <md-menu md-size="4" md-direction="bottom left">
      <md-button class="md-icon-button" md-menu-trigger>
        <md-icon>more_vert</md-icon>
      </md-button>

      <md-menu-content>
        <md-menu-item>
          <span>Call</span>
          <md-icon>phone</md-icon>
        </md-menu-item>

        <md-menu-item>
          <span>Send a message</span>
          <md-icon>message</md-icon>
        </md-menu-item>
      </md-menu-content>
    </md-menu>
  </md-card-header>
  <md-card-media md-ratio="1:1">
    <md-image :md-src="src"></md-image>
  </md-card-media>
  <md-card-content>
    <a v-bind:href='src' target="_blank">{{(char!=null)?title+' is '+char : title}}</a>
    <md-rating-bar v-model="rating" disabled="true" class="md-warn" :md-icon-size="1" :md-empty-iconset="'fa fa-heart-o'" :md-full-iconset="'fa fa-heart'"></md-rating-bar>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
  </md-card-content>
  <md-card-actions>
    <md-button class="md-primary md-raised" @click="loadImage">Load Image</md-button>
    <md-button class="md-primary md-raised" @click="clearImage(0, $event)" @hover="clearImage(1, $event)">Clear Image</md-button>
  </md-card-actions>
</md-card>
<md-input-container style="margin-top=30px;">
  <label name="characters" id="characters" for="characters">Characters</label>
  <md-select v-model="char" @selected="onSelected($event)">
    <md-option v-for="c in characters" v-bind:key="c" :value="c">{{ c }}</md-option>
  </md-select>

</md-input-container>
<Card>
        <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            经典电影
        </p>
        <a href="#" slot="extra" @click.prevent="changeLimit">
            <Icon type="ios-loop-strong"></Icon>
            换一换
        </a>

        <Tabs value="name1">
            <Tab-pane label="标签一" name="name1">标签一的内容</Tab-pane>
            <Tab-pane label="标签二" name="name2">标签二的内容</Tab-pane>
            <Tab-pane label="标签三" name="name3">标签三的内容</Tab-pane>
        </Tabs>
    </Card>
  </div>

</template>
<script>

export default {
  name:'test',

  data: () => ({
    title: 'Welcome Bro!',
    order:0,
    options: [
      {artist:'Ishihara Satomi', rating:5, url:'https://i2.wp.com/www.kawaiikakkoiisugoi.com/wp-content/uploads/2016/01/ishihara-satomi-2.jpg'},
      {artist:'Nagasawa Masami', rating:4, url:'http://www.speakerscorner.me/wp-content/uploads/2016/03/masami15.jpg'},
      {artist: 'Keiko Kitagawa', rating:4.5, url:'https://c2.staticflickr.com/2/1686/25172463043_427025f6e8_c.jpg'}
    ],
    char:null,
    characters: ['cute','charming','pretty'],
    rating:0,
    src: null,
    movieList: [{
                        name: '肖申克的救赎',
                        url: 'https://movie.douban.com/subject/1292052/',
                        rate: 9.6
                    },
                    {
                        name: '这个杀手不太冷',
                        url: 'https://movie.douban.com/subject/1295644/',
                        rate: 9.4
                    },
                    {
                        name: '霸王别姬',
                        url: 'https://movie.douban.com/subject/1291546/',
                        rate: 9.5
                    }],
    randomMovieList: []
  }),
  methods: {
    say(temp){

      this.title = (this.char!=null)?temp.artist+' is '+this.char:temp.artist;
    },
    onSelected(event){
      this.char = event;
      //alert(event)
    },
    loadImage() {

      if(this.order>=this.options.length){
        this.order = 0;
      }
      var temp = this.options[this.order];
      this.src = temp.url;
      this.rating = temp.rating;
      this.title = temp.artist;
      //this.say(temp);
      this.order++;

    },
    clearImage(step, event) {
      if(event.type=='click'){
        console.log('click');

      }
      console.log(event);
      this.src = this.options[step].url;
    },
    changeLimit () {
                function getArrayItems(arr, num) {
                    const temp_array = [];
                    for (let index in arr) {
                        temp_array.push(arr[index]);
                    }
                    const return_array = [];
                    for (let i = 0; i<num; i++) {
                        if (temp_array.length>0) {
                            const arrIndex = Math.floor(Math.random()*temp_array.length);
                            return_array[i] = temp_array[arrIndex];
                            temp_array.splice(arrIndex, 1);
                        } else {
                            break;
                        }
                    }
                    return return_array;
                }
                this.randomMovieList = getArrayItems(this.movieList, 5);
    },
    clickTimeline(){
      alert('Clicked');
    },
    mounted () {
        this.changeLimit();
    }
  }
};
</script>
<style scoped>
#header{
  color: #42b983;
}
.test{
  width: 500px;
  margin-top: 60px;
  margin-left: 60px;
  margin-right: 60px;
  margin-bottom: 60px;

}
</style>
