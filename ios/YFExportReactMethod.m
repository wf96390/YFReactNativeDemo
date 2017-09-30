//
//  YFExportReactMethod.m
//  RNDemo
//
//  Created by wangfeng on 2017/9/30.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "YFExportReactMethod.h"

@implementation YFExportReactMethod

RCT_EXPORT_MODULE();

// 必须要实现该方法
- (NSArray<NSString *> *)supportedEvents
{
  return @[@"ReactNativeCaller"];
}

RCT_EXPORT_METHOD(callReactNativeMethod:(NSString *)string)
{
  [self sendEventWithName:@"ReactNativeCaller"
                     body:@{@"tip": string}];  // 发送通知
}

@end
