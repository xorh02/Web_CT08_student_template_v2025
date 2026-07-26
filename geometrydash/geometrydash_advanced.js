function draw(){
//first version auto activate
for (let orb of orbs) {
      if (box.colliding(orb)) {
        orb.visible = false;
        orb.collider = "none";
        box.vel.y = -10;
        jumpChance = MAX_JUMP;
      }
    }
//second version choose to activate
for (let orb of orbs) {
      if (box.colliding(orb) && kb.presses('space')) {
        orb.visible = false;
        orb.collider = "none";
        box.vel.y = -10;
        jumpChance = MAX_JUMP;
      }else{
        orb.visible = true;
        
      }
    }

  }