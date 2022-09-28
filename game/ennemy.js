var Player = function(name, color, position, direction) {

    this.name = name;
    this.position = position;
    this.life = 3;
    this.bullets = new Array();
    this.direction = direction;
    this.speed = 0;

    this.material = new THREE.MeshLambertMaterial({
        color: color,
        });

    var singleGeometry = new THREE.Geometry();

    vehiculeMesh = new THREE.ConeGeometry(5, 20, 32);
    this.graphic = new THREE.Mesh(vehiculeMesh, this.material);
    this.graphic.position.z = 6;
    this.graphic.position.x = this.position.x;
    this.graphic.position.y = this.position.y;

    this.graphic.rotateOnAxis(new THREE.Vector3(0,0,1), this.direction+(3*Math.PI/2));
};



PLayer.prototype.ai = function()
{
    if (this.position.x > 20 && this.position < 40)
    {
        this.position.x -= 1;
        this.graphic.position.x -= 1;

    }
    else{
        this.position.x += 1;
        this.graphic.position.x += 1;
    }
    
}