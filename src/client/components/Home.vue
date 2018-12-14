<template>
    <div>
        <v-container fluid mt-2 mb-2>
            <v-layout row wrap>
                <div id="e1" style="margin: auto;" v-if="loading">
                    <v-progress-circular :size="100" :width="7" color="purple" indeterminate></v-progress-circular>
                </div>
                <div id="e3" style="margin: auto;" class="grey lighten-3" v-else-if="!loading">
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
                                        <v-list-tile-action class="ml-4">
                                            <v-layout row wrap>
                                                <v-flex xs12 sm4 md4>
                                                    <v-btn flat icon color="pink darken-4" @click="viewInformation(user)">
                                                        <v-icon>remove_red_eye</v-icon>
                                                    </v-btn>
                                                </v-flex>     
                                                <v-flex xs12 sm4 md4>
                                                    <v-btn flat icon color="pink darken-4" @click="removeUser(user.id)">
                                                        <v-icon>delete</v-icon>
                                                    </v-btn>
                                                </v-flex>                                            
                                                <v-flex xs12 sm4 md4>
                                                    <v-switch v-model="switchstate" color="success" hide-details @click="changeStateUser()"></v-switch>
                                                </v-flex>
                                            </v-layout>                                            
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
        <v-dialog  v-model="dialog"  max-width="600">
            <v-card>
                <v-card-title class="headline">Información del usuario</v-card-title>
                <v-container fluid pt-0>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md6 pa-1>
                            <v-text-field name="name" label="Name" solo v-model="user.name"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6 pa-1>
                            <v-text-field name="last name" label="Last name" solo v-model="user.last_name"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md6 pa-1>
                            <v-text-field name="user" label="User" solo v-model="user.user"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6 pa-1>
                            <v-text-field name="password" label="Password" solo v-model="user.password"></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" class="white--text" @click="updateuser()"> Guardar </v-btn>
                    <v-btn color="primary" class="white--text" @click="cerrarCancelar()"> Cerrar/Cancelar </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
    export default {
        name: "Home",
        data: () => {
            return {
                users: [],
                user: {},
                switchstate: false,
                selected: [],
                loading: true,
                dialog: false,
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
                    setTimeout(() => {
                        this.loading = false                    
                    }, 600);                    
                }).catch((err) => {
                    console.log(err);
                    
                });
            },
            viewInformation(user) {
                this.user = user
                this.dialog = true
            },
            updateuser() {
                let user = this.user
                this.$http.post('/api/users/updateuser', user).then((result) => {
                    this.dialog = false     
                    setTimeout(() => {
                        this.user = {}
                    }, 300);             
                }).catch((err) => {
                    console.log(err)                    
                })
            },
            removeUser(id) {
                this.$http.post('/api/users/deleteuser', { id: id }).then((result) => {
                    this.listusers()
                }).catch((err) => {
                    console.log(err)                    
                });
            },
            changeStateUser(event) {
                console.log(event);
                
            },
            cerrarCancelar() {
                this.dialog = false
                setTimeout(() => {
                    this.user = {}
                }, 300);       
            }
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
