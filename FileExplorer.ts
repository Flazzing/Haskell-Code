import { Card } from './Card';
import { Canvas } from './Canvas';
import { Stack } from './Stack';

export class FileExplorer extends Card {


public parent: Canvas | Stack;


  constructor(parent: Canvas | Stack ){
    super(parent);

    // Set header and title

  }

}
