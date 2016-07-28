<template>

	<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Points | {{ state.points.points }}</a>
    </div>
</nav>

	<div class="container-fluid">
    	<router-view transition="fade" transition-mode="out-in" class="animated"></router-view>
    </div>
</template>




