import express from 'express';
import randomstring from 'randomstring';
import { Request, Response } from 'express';
import io from 'socket.io';

export function createGameHandler(req: Request, res: Response) {
    // const { screenName: string } = req.body;
    const roomCode: string = randomstring.generate(4);

    io.on('connection', function(socket: any) {
      socket.join(roomCode);
    });
}