<template>
    <div>
        <v-container fluid mt-2 mb-2>
            <v-layout row wrap>
                <div id="e3" style="margin: auto;" class="grey lighten-3">
                    <v-toolbar color="grey" dark>
                    <v-toolbar-title>Users</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>search</v-icon>
                    </v-btn>
                    </v-toolbar>

                    <v-card>
                    <v-container fluid grid-list-lg>
                        <v-layout row wrap>
                            <v-list two-line>
                                <div v-for="(user, index) in users" :key="user.id" :class="(user.state > 0) ? 'color-user-active' : 'color-user-desactive'">
                                    <v-list-tile avatar ripple @click="toggle(index)">
                                        <v-list-tile-avatar>
                                            <img :src="'https://randomuser.me/api/portraits/med/men/65.jpg'">
                                        </v-list-tile-avatar>
                                        <v-list-tile-content>
                                            <v-list-tile-title v-html="user.name +' '+user.last_name"></v-list-tile-title>
                                            <v-list-tile-sub-title><span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.</v-list-tile-sub-title>
                                        </v-list-tile-content>
                                        <v-list-tile-action>
                                            <v-icon v-if="selected.indexOf(index) < 0" color="grey lighten-1">star_border</v-icon>
                                            <v-icon v-else color="yellow darken-2">star</v-icon>
                                        </v-list-tile-action>
                                    </v-list-tile>
                                    <v-divider inset="inset" :key="index"></v-divider>
                                </div>
                            </v-list>
                        </v-layout>
                    </v-container>
                    </v-card>
                </div>
            </v-layout>
        </v-container>
        
    </div>
</template>
<script>
    export default {
        name: "Home",
        data: () => {
            return {
                users: [],
                selected: [2],
                //{ divider: true, inset: true },
            }
        },
        mounted() {
            this.listusers()
        },
        methods: {
            toggle (index) {
                const i = this.selected.indexOf(index)
                if (i > -1) {
                    this.selected.splice(i, 1)
                } else {
                    this.selected.push(index)
                }
            },
            listusers() {
                this.$http.get('/api/users/').then((result) => {
                    let data = result.data
                    this.users = data
                    console.log(result);
                    
                }).catch((err) => {
                    console.log(err);
                    
                });
            },
        },
    }
</script>
<style>
    /*.color-user-active::before {
        content: '';
        width: 0; 
        height: 0; 
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent; 
        
        border-right:10px solid blue; 
    }*/
</style>
