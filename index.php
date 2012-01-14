<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title></title>
    <script src="jquery-1.7.1.min.js"></script>
    <script src="engine.js"></script>
    <title>¤</title>
    <style type="text/css">
      body{
        background: #333;
      }
      #console{
        background: #333;
        border: 1px solid #999;
        color: #99FF00;
        padding: 10px;
        width: 578px;
        height: 458px;
        
        border-radius:6px;
        font-family: Arial, sans;
        overflow: hidden;
        float: left;
      }
      #game{
        background: #CCC;
        float: left;
        margin-right: 50px;
      }
      #device{
        background: #666;
        border: 1px solid #999;
        border-radius:6px;
        padding:50px;
        position: relative;
        
        width: 320px;
        height: 480px;
        overflow: hidden;
      }
      #retainer{
        height: 580px;
        width: 1000px;
      }
    </style>
  </head>
  <body>
    <div id="device"><div id="retainer">
    <div><canvas id="game" width="320" height="480"></canvas></div>
    <div id="console">console</div></div></div>
  </body>
</html>
