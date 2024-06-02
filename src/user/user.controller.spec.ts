import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get user by email when there is a defined user', async () => {
    const email = 'sasiruravihansa@gmail.com';
    const result = await controller.findOne(email);
    expect(result).toBeDefined();
  });

  it('should throw an error when there is no user defined', async () => {
    const email = 'sasiru@gmail.com';
    try {
      await controller.findOne(email);
    } catch (error) {
      expect(error.message).toBe('User not found');
    }
  });
});
