//
//  YFTestObject.m
//  RNDemo
//
//  Created by wangfeng on 2017/9/22.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "YFTestObject.h"

@implementation YFTestObject

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(doSomething:(NSString *)string)
{
  NSLog(@"%@",string);
}

RCT_EXPORT_METHOD(doSomethingCallback:(NSString *)string callback:(RCTResponseSenderBlock)callback)
{
  NSLog(@"%@",string);
  callback(@[[NSNull null] ,@[@"test1", @"test2"]]); // 第一个error，第二个回调参数
}

@end
